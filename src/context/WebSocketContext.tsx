import React from 'react';

import { Socket, io } from 'socket.io-client';

interface WebSocketContextType {
    socket: Socket | null;
    isConnected: boolean;
}

const WebSocketContext = React.createContext<WebSocketContextType>({
    socket: null,
    isConnected: false,
});

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [socket, setSocket] = React.useState<Socket | null>(null);
    const [isConnected, setIsConnected] = React.useState<boolean>(false);

    React.useEffect(() => {
        const socketIo = io(process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3005', {
            withCredentials: true,
            transports: ['websocket', 'polling'],
            autoConnect: true,
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 1000,
        });

        socketIo.on('connect', () => {
            console.log('Socket connected:', socketIo.id);
            setIsConnected(true);
        });

        socketIo.on('disconnect', () => {
            console.log('Socket disconnected');
            setIsConnected(false);
        });

        setSocket(socketIo);

        return () => {
            socketIo.disconnect();
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{ socket, isConnected: Boolean(isConnected) }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export default WebSocketContext;

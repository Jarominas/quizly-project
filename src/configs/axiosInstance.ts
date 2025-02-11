import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

const axiosInstance = axios.create({
    baseURL: `${API_URL}`,
});

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');

        if (token) config.headers['Authorization'] = `Bearer ${token}`;

        return config;
    },
    error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.reload();

            return Promise.reject(new Error('Not authorized, please check your permissions'));
        }

        return Promise.reject(error);
    }
);

export { axiosInstance };

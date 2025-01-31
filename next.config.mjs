const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3005',
                pathname: '/uploads/quiz-images/**',
            },
        ],
    },
};

export default nextConfig;

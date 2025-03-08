/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vectorlogoseek.com',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'jobadder.com',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'recruitly.io',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'victorycto.com',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
};

export default nextConfig;

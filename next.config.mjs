/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.apiexchange.site",
            },
        ],
    },
};

export default nextConfig;

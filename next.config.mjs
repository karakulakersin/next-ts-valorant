/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents:true
    },
    images: {
        domains: ['media.valorant-api.com'],
    },
    reactStrictMode:false
};

export default nextConfig;

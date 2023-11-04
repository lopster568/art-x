/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/sign-in',
                destination: '/api/auth/login',
                permanent: true,
            },
            {
                source: '/sign-up',
                destination: '/api/auth/register',
                permanent: true,
            },
        ]
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/*/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/*',
            },
        ],
    },
}

module.exports = nextConfig

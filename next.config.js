/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],

        remotePatterns: [{
                protocol: "https",
                hostname: "upload.wikimedia.org"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },


        ]
    },
    experimental: {
        serverComponentsExternalPackages: ['mongoose'] // it's a mendatory  to access  mongodb 
    }
}

module.exports = nextConfig
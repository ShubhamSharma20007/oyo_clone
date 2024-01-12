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
            {
                protocol: "https",
                hostname: "images.oyoroomscdn.com"
            },
            {
                protocol: "https",
                hostname: 'cdn.pixabay.com'
            }, {
                protocol: 'https',
                hostname: 'www.shutterstock.com'
            },
            {
                protocol: 'https',
                hostname: 'www.symbols.com'
            },
            {
                protocol: 'https',
                hostname: 'static.vecteezy.com'
            },
            {
                protocol: 'https',
                hostname: 'png.pngtree.com'
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com'
            },
            {
                protocol: 'https',
                hostname: 'storage.needpix.com'
            }



        ]
    },
    experimental: {
        serverComponentsExternalPackages: ['mongoose'] // it's a mendatory  to access  mongodb 
    }
}

module.exports = nextConfig
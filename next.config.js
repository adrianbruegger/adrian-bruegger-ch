if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
    throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cms.adrian-bruegger.ch",
                port: "",
                pathname: "/wp-content/uploads/**",
            },
        ],
    },
});



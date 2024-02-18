/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		serverComponentsExternalPackages: ['react-dom/server'],
	},
}

module.exports = nextConfig

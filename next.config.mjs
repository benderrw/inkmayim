/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:1337/api/:path*'
			}
		]
	},
	output: 'standalone', // Importante para Vercel
	images: {
		domains: ['cms.inkmayim.com.br']
	}
}

export default nextConfig

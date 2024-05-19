/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
				module: false,
				path: false,
			};
		}
		return config;
	},
	headers: async () => [
		{
			source: '/:path*',
			headers: [
				{
					key: 'Content-Security-Policy',
					value: "meta-src 'self' data:;",
				},
				{
					key: 'meta',
					value: 'cryptomus c7cbe90c',
				},
			],
		},
	],
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,

	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};
		return config;
	},

	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},

	// cors
	async headers() {
		return [
			{
				source: "/(.*)?",
				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: "*",
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,HEAD,PUT,PATCH,POST,DELETE",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;

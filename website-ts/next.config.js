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

	
	webpack5: true,
	webpack: (config) => {
		config.resolve.fallback = { "https": false, "assert": false, "fs": false, "path": false, "os": false, "util": false, "process": false, "events": false, "stream": false, "zlib": false, "crypto": false, "querystring": false };
	
		return config;
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

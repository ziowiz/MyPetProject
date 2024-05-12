const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	// Proxy for API (external)
	app.use(
		"/api",
		createProxyMiddleware({
			target: "https://evilinsult.com",
			changeOrigin: true,
			pathRewrite: {
				"^/api": "",
			},
		})
	);

	// Proxy for local PHP server (src/server)
	app.use(
		"/src/server",
		createProxyMiddleware({
			target: "http://localhost:80", // Указание на ваш PHP-сервер
			pathRewrite: { "^/src/server": "" },
			secure: false,
		})
	);
	app.use(
		"/src/server",
		createProxyMiddleware({
			target: "http://localhost:80", // Указание на ваш PHP-сервер
			pathRewrite: { "^/server": "" },
			secure: false,
		})
	);
	app.use(
		"/src/server",
		createProxyMiddleware({
			target: "http://localhost:80", // Указание на ваш PHP-сервер
			pathRewrite: { "^/src": "" },
			secure: false,
		})
	);
	app.use(
		"/src/server",
		createProxyMiddleware({
			target: "http://localhost:80", // Указание на ваш PHP-сервер
			pathRewrite: { "^": "" },
			secure: false,
		})
	);
};

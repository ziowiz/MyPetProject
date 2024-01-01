const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "https://evilinsult.com",
			changeOrigin: true,
			pathRewrite: {
				"^/api": "", // убирает /api из запроса
			},
		})
	);
};

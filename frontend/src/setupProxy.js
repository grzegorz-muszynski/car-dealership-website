// Used only by the dev server (npm start) - the production build ignores this file.
// The Strapi CORS whitelist doesn't include localhost, so in development API requests
// go through the dev server, which forwards them to Strapi without the browser's Origin.
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://wanda196-20196.mikrus.cloud',
            changeOrigin: true,
            onProxyReq: (proxyReq) => proxyReq.removeHeader('origin'),
        })
    );
};

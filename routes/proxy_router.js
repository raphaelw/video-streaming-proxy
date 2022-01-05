var express = require('express');
var router = express.Router();

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Buck Buck Boo!");
});

module.exports = router;

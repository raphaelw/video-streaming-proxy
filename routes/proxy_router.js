var express = require('express');
var router = express.Router();

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

/**
 * Simple proxy strategy inspired by: https://stackoverflow.com/a/26359056
 */

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('Host', 'distribution.bbb3d.renderfarming.net');
  console.log(proxyReq);
});

/* GET home page. */
router.get('/:studio/:scene', function(req, res, next) {
  //res.send(`req.url: "${req.url}"`);
  req.url = "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_2160p_60fps_stereo_abl.mp4";
  return proxy.web(req, res , { target: "http://distribution.bbb3d.renderfarming.net" } );
});

module.exports = router;

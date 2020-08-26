const PROXY_CONFIG = {
  "/api/proxy": {
    "target": "http://localhost:4200",
    "secure": false,
    "bypass": function (req, res, proxyOptions) {
      if (req.headers.accept.indexOf("html") !== -1) {
        console.log("Skipping proxy for browser request.");
        return "/index.html";
      }
      req.headers["X-Custom-Header"] = "yes";
    }
  }
}

module.exports = PROXY_CONFIG;

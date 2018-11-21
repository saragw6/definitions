function searchIgnore (value, ignores) {
  return ignores.some(function (search) {
    return search.test(value)
  })
}

var redirectToHTTPSOrCustomDomain = (ignoreHosts = [], ignoreRoutes = [], redirectCode = 301) => {
  return function middlewareRedirectToHTTPS (req, res, next) {
    const isNotSecure = (!req.get('x-forwarded-port') && req.protocol !== 'https') ||
      parseInt(req.get('x-forwarded-port'), 10) !== 443 &&
        (parseInt(req.get('x-forwarded-port'), 10) === parseInt(req.get('x-forwarded-port'), 10))

    const isHerokuUrl = req.get('host').includes("queer-undefined.heroku");
    const path = req.url.startsWith("//") ? req.url.substring(1) : req.url;

    if (isHerokuUrl || (isNotSecure && !searchIgnore(req.get('host'), ignoreHosts) &&
      !searchIgnore(req.path, ignoreRoutes))){
      return res.redirect(redirectCode, 'https://' + 'www.queerundefined.com' + path)
    }

    next()
  }
}

exports.redirectToHTTPSOrCustomDomain = redirectToHTTPSOrCustomDomain
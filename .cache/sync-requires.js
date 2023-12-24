const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/zabloncharles/Desktop/Port-Project-React/.cache/dev-404-page.js"))),
  "component---src-pages-index-3-js": hot(preferDefault(require("/Users/zabloncharles/Desktop/Port-Project-React/src/pages/index-3.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/zabloncharles/Desktop/Port-Project-React/src/pages/index.js"))),
  "component---src-pages-mobile-js": hot(preferDefault(require("/Users/zabloncharles/Desktop/Port-Project-React/src/pages/Mobile.js")))
}


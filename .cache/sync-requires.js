const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/zabloncharles/Portfolio/Portfolio-project/.cache/dev-404-page.js"))),
  "component---src-pages-index-3-js": hot(preferDefault(require("/Users/zabloncharles/Portfolio/Portfolio-project/src/pages/index-3.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/zabloncharles/Portfolio/Portfolio-project/src/pages/index.js"))),
  "component---src-pages-mobile-app-js": hot(preferDefault(require("/Users/zabloncharles/Portfolio/Portfolio-project/src/pages/MobileApp.js"))),
  "component---src-pages-web-app-js": hot(preferDefault(require("/Users/zabloncharles/Portfolio/Portfolio-project/src/pages/WebApp.js"))),
  "component---src-pages-welcome-typing-message-js": hot(preferDefault(require("/Users/zabloncharles/Portfolio/Portfolio-project/src/pages/WelcomeTypingMessage.js")))
}


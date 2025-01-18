const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://www.imdb.com',
      defaultCommandTimeout: 10000,
      responseTimeout: 10000,
      viewportWidth: 1024,
      viewportHeight: 640,
      screenshotsFolder: "cypress/screenshots",
      video: true,
      defaultBrowser: 'chrome',
      failOnStatusCode: false,
      chromeWebSecurity: false,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      },
  },
});

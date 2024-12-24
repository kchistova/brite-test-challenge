const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://www.imdb.com',
      defaultCommandTimeout: 10000,
      viewportWidth: 1024,
      viewportHeight: 640,
      screenshotsFolder: "cypress/screenshots",
      video: true,
      browser: 'chrome',
      failOnStatusCode: false
  },
});

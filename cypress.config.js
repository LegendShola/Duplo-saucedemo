const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/tests/**/*.spec.js',
    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});

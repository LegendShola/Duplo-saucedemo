const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });

      // // Add a custom task to handle `reportAllureCypressSpecMessages` if needed
      // on('task', {
      //   reportAllureCypressSpecMessages: () => {
      //     return null; // Ensure task is handled
      //   },
      // });
      
      return config;
    },
    specPattern: 'cypress/Tests/**/*.spec.js',
    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    quiet: true,
    timestamp: 'mmddyyyy_HHMMss',
  },
  env: {
    allureOutputPath: 'cypress/reports/allure-results',
    allure: true,
  }
});

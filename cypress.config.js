const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "Ij0RfK",
  e2e: {
    baseUrl: "https://todomvc.com/examples/vanillajs",
    videoUploadOnPasses: false,
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/*/**/*.spec.js",
  },
});

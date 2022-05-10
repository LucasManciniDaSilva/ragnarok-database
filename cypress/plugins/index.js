const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const browserify = require("@cypress/browserify-preprocessor");
require("dotenv").config();

module.exports = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve("typescript"),
  };
  on("file:preprocessor", cucumber(options));
  allureWriter(on, config);

  config.env.clientId = process.env.CYPRESS_CLIENT_ID;
  config.env.authorization = process.env.CYPRESS_AUTHORIZATION;
  config.env.automationUrl = process.env.CYPRESS_AUTOMATION_URL;

  return config;
};

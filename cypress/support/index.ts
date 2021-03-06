import addContext from "mochawesome/addContext";
import "@shelex/cypress-allure-plugin";
import "./app"
import "./pageActions"
import "./searchActions"
import "./app"
import '@percy/cypress'
require("cypress-xpath");
import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
  failureThreshold: 0.01,
  failureThresholdType: "percent",
  customDiffConfig: {
    threshold: 0.1,
  },
  capture: "viewport",
});

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const screenshot = `${Cypress.config("screenshotsFolder")}/${
      Cypress.spec.name
    }/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);
  }
});

const cypress = require("cypress");

/**
 * @type {CypressCommandLine.CypressRunOptions}
 */
const option = {};

/**
 * @type {Cypress.ResolvedConfigOptions}
 */
const config = {
  baseUrl: "http://localhost:3000",
  integrationFolder: "cypress/integration",
  testFiles: ["**/*.spec.ts", "**/*.test.ts"],
  video: false,
};

(async () => {
  await cypress.run({ ...option, config });
  console.log("finish");
})();

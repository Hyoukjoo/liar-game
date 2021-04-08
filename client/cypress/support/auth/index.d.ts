/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login: () => Chainable<Cypress.Response>;
    logout: () => Chainable<Cypress.Response>;
  }
}

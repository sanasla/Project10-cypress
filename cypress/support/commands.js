//commands pour ne pas repeter le selecteur data-cy dans le HTML
Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-cy= ${selector}]`, ...args);
  });
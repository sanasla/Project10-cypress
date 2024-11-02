import { faker } from "@faker-js/faker";
const fakeLastName = faker.person.lastName();
const fakeFirstName = faker.person.firstName();
const fakeEmail = faker.internet.email();
const fakePassword = faker.internet.password({ length: 20 });

describe("S'inscrire", () => {
  it("TEST 1_Inscription reussi  nouvel utilisateur ", () => {
    cy.visit("http://localhost:8080/#/register");
    cy.getBySel("register-input-lastname").type(fakeLastName);
    cy.getBySel("register-input-firstname").type(fakeFirstName);
    cy.getBySel("register-input-email").type(fakeEmail);
    cy.getBySel("register-input-password").type(fakePassword);
    cy.getBySel("register-input-password-confirm").type(fakePassword);
    cy.getBySel("register-submit").click();
    cy.getBySel("nav-link-cart")
      .should("be.visible")
      .should("contain", "Mon panier");
    cy.getBySel("nav-link-logout")
      .should("be.visible")
      .should("contain", "Déconnexion");
  });

  it("TEST 2: Inscription sans remplir champ nom ", () => {
    cy.visit("http://localhost:8080/#/register");
    cy.getBySel("register-input-firstname").type(fakeFirstName);
    cy.getBySel("register-input-email").type(fakeEmail);
    cy.getBySel("register-input-password").type(fakePassword);
    cy.getBySel("register-input-password-confirm").type(fakePassword);
    cy.getBySel("register-submit").click();
    cy.getBySel("register-errors")
      .should("be.visible")
      .should("contain", "Merci de remplir correctement");
  });

  it("TEST 3: Inscription sans remplir email ", () => {
    cy.visit("http://localhost:8080/#/register");
    cy.getBySel("register-input-lastname").type(fakeLastName);
    cy.getBySel("register-input-firstname").type(fakeFirstName);
    cy.getBySel("register-input-password").type(fakePassword);
    cy.getBySel("register-input-password-confirm").type(fakePassword);
    cy.getBySel("register-submit").click();
    cy.getBySel("register-errors")
      .should("be.visible")
      .should("contain", "Merci de remplir correctement");
  });

  it("TEST 4: Inscription sans password confirm ", () => {
    cy.visit("http://localhost:8080/#/register");
    cy.getBySel("register-input-lastname").type(fakeLastName);
    cy.getBySel("register-input-firstname").type(fakeFirstName);
    cy.getBySel("register-input-password").type(fakePassword);
    cy.getBySel("register-submit").click();
    cy.getBySel("register-errors")
      .should("be.visible")
      .should("contain", "Merci de remplir correctement");
  });
});

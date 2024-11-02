import { faker } from "@faker-js/faker"; // Faker.js est une bibliothèque JavaScript qui permet de générer des données factices de manière aléatoire.
const password = faker.internet.password(); //créer un mot de passe
const email = faker.internet.email(); //créer un email
console.log("email:", email);
console.log("password:", password);

describe("tester la connexion", () => {
  it("Test 1: Login avec email et password incorrecte en utilisant faker ", () => {
    cy.visit("");
    cy.getBySel("nav-link-login").click();
    cy.getBySel("login-input-username").type(email);
    cy.getBySel("login-input-password").type(password);
    cy.getBySel("login-submit").click();
    cy.getBySel("login-errors").should("be.visible"); //le message d'erreur est visible
  });

  it("TEST 2 :login avec les deux champs vides et apparition de msg Merci de remplir correctement tous les champs", () => {
    cy.visit("");
    cy.getBySel("nav-link-login").click();
    cy.getBySel("login-submit").click();
    cy.contains("Merci de remplir correctement tous les champs").should(
      "be.visible"
    );
  });

  it("TEST 3: login avec un mot de passe invalide", () => {
    cy.visit("");
    cy.getBySel("nav-link-login").click();
    cy.getBySel("login-input-username").type("test2@test.fr");
    cy.getBySel("login-input-password").type("123466lp");
    cy.getBySel("login-submit").click();
    cy.contains("Identifiants incorrects").should("be.visible");
  });

  it("tEST 4: login avec un e-mail et un mot de passe valides", () => {
    cy.login();
  });
});

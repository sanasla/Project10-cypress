import { faker } from "@faker-js/faker"; // Faker.js est une bibliothèque JavaScript qui permet de générer des données factices de manière aléatoire.
const password = faker.internet.password(); //créer un mot de passe
const email= faker.internet.email(); //créer un email
console.log('email:', email);
console.log('password:', password);

describe('login', () => {
  it('email et password incorrecte avec faker ', () => {
    cy.visit("")
    cy.getBySel("nav-link-login").click();
    cy.getBySel("login-input-username").type(email);
    cy.getBySel("login-input-password").type(password);
    cy.getBySel("login-submit").click();
    cy.getBySel("login-errors").should("be.visible");//le message d'erreur est visible
  
  
  })
  
  it("TEST 2 les deux champs vides - apparition de msg Merci de remplir correctement tous les champs-", () => {
      cy.visit("");
      cy.getBySel("nav-link-login").click();
      cy.getBySel("login-submit").click();
      cy.contains("Merci de remplir correctement tous les champs").should("be.visible");
  });

  it("enter an incorrect password", () => {
    cy.visit("");
    cy.getBySel("nav-link-login").click();
    cy.getBySel("login-input-username").type("test2@test.fr");
    cy.getBySel("login-input-password").type("123466lp");
    cy.getBySel("login-submit").click();
    cy.contains("Identifiants incorrects").should("be.visible");
  });
  
  it("enter an mail et mot passe valides", () => {
    cy.visit("");
    cy.getBySel("nav-link-login").click();
    cy.getBySel("login-input-username").type("username");
    cy.getBySel("login-input-password").type(" password");
    cy.getBySel("login-submit").click();

  });
  


})
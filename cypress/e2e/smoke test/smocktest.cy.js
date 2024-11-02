describe("smoke test", () => {
  it("Test1: vérifiez la présence des champs et boutons de connexion ", () => {
    // acceder a la page d'aceuil de site
    cy.visit("");

    // TRouver le lien de navigation et faire un click

    cy.getBySel("nav-link-login").click(); // Clic "connection nav-link"

    // assertion pour verifier que url contient login
    cy.url().should("include", "/login");
    // Vérifier la présence du champ email
    cy.getBySel("login-input-username").should("be.visible");

    // Vérifier la présence du champ mot de passe
    cy.getBySel("login-input-password").should("be.visible");

    // Vérifier la présence du bouton de soumission
    cy.getBySel("login-submit").should("be.visible");
  });
});

it(" TEST 2: Vérifier la présence button d'ajouter au panier' et la disponibilitée du produit login ok", () => {
  // Connection avec Email et MdP
  cy.visit("");
  cy.getBySel("nav-link-login").click();
  cy.getBySel("login-input-username").type("test2@test.fr");
  cy.getBySel("login-input-password").type("testtest");
  cy.getBySel("login-submit").click();
  cy.contains("Mon panier").should("be.visible"); //" le bouton "Mon panier" dans la place de "Connexion"

  // Sélectionner un produit depuis la page "Produits"
  cy.getBySel("nav-link-products").click();
  cy.get("button").eq(0).should("contain", "Consulter").click();

  // Vérifier la présence bouton "ajouter au panier" et du champ de disponibilité du produit.
  cy.getBySel("detail-product-add").should("be.visible");
  cy.getBySel("detail-product-stock").should("be.visible");
});

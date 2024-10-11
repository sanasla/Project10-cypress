describe('smoke test_test5', () => {
  it('vérifiez la présence des champs et boutons de connexion ', () => {
    cy.visit('http://localhost:8080/#/')

     // Find the connexion button and click it
 
     cy.getBySel("nav-link-login").click(); // Clic "connection nav-link"
    
     // assertions here to verify the action
     cy.url().should('include', '/login')
      // Vérifier la présence du champ email
      cy.getBySel("login-input-username").should("be.visible");
    
     // Vérifier la présence du champ mot de passe
     cy.getBySel("login-input-password").should("be.visible");

  // Vérifier la présence du bouton de soumission
      cy.getBySel("login-submit").should("be.visible");

  })
})

it(" TEST_2 Vérifier la présence button d'ajouter au panier' et la disponibilitée du produit login ok", () => {
  // Connection avec Email et MdP
  cy.visit('http://localhost:8080/#/')
  cy.getBySel("nav-link-login").click();
  cy.getBySel("login-input-username").type("test2@test.fr");
  cy.getBySel("login-input-password").type("testtest");
  cy.getBySel("login-submit").click();
  cy.contains("Mon panier").should("be.visible");//" le bouton "Mon panier" dans la place de "Connexion"
  

 // Sélectionner un produit depuis la page "Produits"
 cy.getBySel("nav-link-products").click();
 cy.get("button").eq(0).should("contain", "Consulter").click();

  // Vérifier la présence bouton "ajouter au panier" et du champ de disponibilité du produit.
  cy.getBySel("detail-product-add").should("be.visible");
  cy.getBySel("detail-product-stock").should("be.visible");

});
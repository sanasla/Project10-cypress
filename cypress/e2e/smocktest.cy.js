describe('smoke test_test5', () => {
  it('vérifiez la présence des champs et boutons de connexion ', () => {
    cy.visit('http://localhost:8080/#/')

     // Find the connexion button and click it
     cy.get('a').contains('Connexion').click()
    
     // assertions here to verify the action
     cy.url().should('include', '/login')
      // Vérifier la présence du champ email
    cy.get('#username') // Remplace par l'id de ton champ email
    .should('be.visible');
     // Vérifier la présence du champ mot de passe
    cy.get('#password') // Remplace par l'id de ton champ mot de passe
    .should('be.visible');

  // Vérifier la présence du bouton de soumission
  cy.get('[data-cy="login-submit"]')
      .should('be.visible')

  })
})

it(" TEST_2 Vérifier la présence 'd'ajouter au panier' et la disponibilitée du produit login ok", () => {
  // Connection avec Email et MdP
  cy.visit('http://localhost:8080/#/')

  // Find the connexion button and click it
  cy.get('a').contains('Connexion').click()
  cy.getBySel("login-input-username").type("test2@test.fr");
    cy.getBySel("login-input-password").type("testtest");
  
  
  
 
  
});
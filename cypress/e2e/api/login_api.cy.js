describe("api login request", () => {
    
  
    it("TEST 1_Retourne une erreur 401 pour un utilisateur inconnu", () => {
        
    // Envoyer une requête POST  avec des identifiants incorrects

        cy.request({
        method: 'POST', // Méthode de la requête
        url: `${Cypress.env("apiUrl")}/login`,// URL cible (assurez-vous que l'URL est correcte)
        body: {
            username: "utilisateur_inconnu",
            password: "mot_de_passe_incorrect",
          }, // Les données à envoyer

        failOnStatusCode: false, // Ne pas échouer le test si le code de statut n'est pas 200
       
      }).then((response) => {

        expect(response.status).to.eq(401); // S'assurer que le statut est 401 (créé)
        
    })     
     
    });





    
  });
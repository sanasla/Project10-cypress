describe("api login request", () => {
    const apiLogin=`${Cypress.env("apiUrl")}/login`;
  
    it("TEST 1_Retourne une erreur 401 pour un utilisateur inconnu", () => {
        
        // Envoyer une requête POST  avec des identifiants incorrects
        cy.request({
          method: 'POST', // Méthode de la requête
          url: apiLogin,// URL cible (assurez-vous que l'URL est correcte)
          body: {
             username: "utilisateur_inconnu",
             password: "mot_de_passe_incorrect",
           }, // Les données à envoyer

          failOnStatusCode: false, // Ne pas échouer le test si le code de statut n'est pas 200
       
        }).then((response) => {

          expect(response.status).to.eq(401); // S'assurer que le statut est 401 (créé)
        
        })     
     
    });

    it("TEST 1_Retourne une erreur 401 pour un utilisateur ayant mail vaide et mot pass invalide", () => {
        
      
        cy.request({
          method: 'POST', 
          url: apiLogin,
          body: {
             username: "test2@test.fr",
             password: "mot_de_passe_incorrect",
           }, 

          failOnStatusCode: false, // Ne pas échouer le test si le code de statut n'est pas 200
       
        }).then((response) => {

          expect(response.status).to.eq(401); // S'assurer que le statut est 401 (créé)
        
        })     
     
    });


    it("TEST 1_Retourne une erreur 401 pour un utilisateur ayant mail invaide et mot pass valide", () => {
        
      
        cy.request({
          method: 'POST', 
          url: apiLogin,
          body: {
             username: "sana@test.fr",
             password: "testtest",
           }, 

          failOnStatusCode: false, // Ne pas échouer le test si le code de statut n'est pas 200
       
        }).then((response) => {

          expect(response.status).to.eq(401); // S'assurer que le statut est 401 (créé)
        
        })     
     
    });










    it("TEST 2_Retourne un code de statut 200 pour un utilisateur connu", () => {
        // Envoyer une requête POST au endpoint de login avec des identifiants corrects
        cy.request({
          method: "POST",
          url: apiLogin,
          body: {
            username: "test2@test.fr",
            password: "testtest",
          },
        }).then((response) => {
          // Vérifier que la réponse contient un code de statut 200
          expect(response.status).to.eq(200);
        });

    });



  });
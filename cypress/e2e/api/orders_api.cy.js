describe("cheking cart with Api ", () => {
    it(" TEST 1: Acceder au panier sans authentification ", () => {
      cy.request({
        url: `${Cypress.env("apiUrl")}/orders`,
        headers: {
 
         Authorization: "", //// En-tête Authorization vide pour spécifier que l'utilisateur n'est pas connecté
        },
        failOnStatusCode: false, // Permet de ne pas échouer si la reponse n'est pas 200
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
 
  
  
    const apiLogin=`${Cypress.env("apiUrl")}/login`;

    it("TEST 2: jouter un produit disponible au panier avec connexion", () => {
        // Se connecter pour obtenir un jeton d'authentification
        cy.request({
            method: 'POST', 
            url: apiLogin,
            body: {
               username: "test2@test.fr",
               password: "testtest",
            },
        }).then((loginResponse) => {
            expect(loginResponse.status).to.eq(200);
            

            // Extraire le jeton d'authentification de la réponse
            const token = loginResponse.body.token;

             // Envoyer une requête POST à l'endpoint d'ajout au panier avec les détails du produit
            cy.request({
               method: "PUT",
                url: `${Cypress.env("apiUrl")}/orders/add`,
                body: {
                  product: "7", // l'ID du produit
                  quantity: 1, // La quantité du produit à ajouter au panier
                },
                headers: {
                    'Authorization': `Bearer ${token}` // Inclure le jeton dans l'en-tête
                  }
              }).then((response) => {
                // Vérifier que la réponse contient un code de statut 200
                expect(response.status).to.eq(200);
              });
            
          });
  });

    it("TEST 3: jouter un produit en rupture de stock", () => {
          // Se connecter pour obtenir un jeton d'authentification
          cy.request({
              method: 'POST', 
              url: apiLogin,
              body: {
                username: "test2@test.fr",
                password: "testtest",
              },
          }).then((loginResponse) => {
              expect(loginResponse.status).to.eq(200);
              

              // Extraire le jeton d'authentification de la réponse
              const token = loginResponse.body.token;

              // Envoyer une requête POST à l'endpoint d'ajout au panier avec les détails du produit
              cy.request({
                method: "PUT",
                  url: `${Cypress.env("apiUrl")}/orders/add`,
                  body: {
                    product: "3", // l'ID du produit
                    quantity: 1, // La quantité du produit à ajouter au panier
                  },
                  headers: {
                      'Authorization': `Bearer ${token}` // Inclure le jeton dans l'en-tête
                    },
                    failOnStatusCode: false, // Permet de ne pas échouer si la reponse n'est pas 200
                }).then((response) => {
                  expect(response.status).not.to.eq(200); // Ensure status is not 200
                });
              
            });

    });

  });

        
describe("Test API / Produits ", () => {

    const apiProduct = `${Cypress.env("apiUrl")}/products`;

    it(" TEST 1: Récupération de la liste des produits", () => {
        cy.request("GET", apiProduct).then((reponse) => {
          expect(reponse.status).to.eq(200);
        
        });
      });


    it("TEST 2: doit renvoyer les détails du produit lorsqu'un identifiant de produit valide est fourni  ", () => {
        const productId = 4; // En chiffre pas de chaine de caractère "4"
        cy.request("GET", `${apiProduct}/${productId}`).then((response) => {
        expect(response.status).to.eq(200);

        expect(response.body).to.have.property("id", productId); // Vérifie la propiété ID qui a la même valeur
        const productDetails = response.body;
        expect(productDetails.name).to.eq("Chuchotements d'été"); // Valeur attendu
        expect(productDetails.skin).to.eq("Sèche");
        expect(productDetails.aromas).to.eq("Nature et végétal");
      });


          
      });

    
      });

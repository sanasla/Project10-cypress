describe('les tests effectués sur le panier', () => {
   
    const apiLogin=`${Cypress.env("apiUrl")}/login`;
    it('Test1 : placer un produit  rupture de stock dans le panier ', () => {

        cy.login(); //Sur la page du site connecté configuré dans dossier support puis commond .js
        
        cy.getBySel("nav-link-products").should("be.visible");
       
        cy.visit("/#/products/4");// visit l article cible avec id4 que je connait son stock egale -1
      
          // Vérifie que le produit est bien en rupture de stock par cette assertion
          cy.getBySel("detail-product-stock") 
          .should("exist")
          .and("contain", "-1");

          // Tentative d'ajout au panier
        cy.getBySel("detail-product-quantity").clear().type("1");
        cy.getBySel("detail-product-add").click();
       
        //wait and check no redirection
        cy.wait(1000)
        cy.url().should("not.contain", "cart");

        // go to pannier and check no objects
        cy.getBySel("nav-link-cart").click();
        cy.wait(1000)

        // verifier que le produit n'est pas dans le panier ainsi que le panier est vide
        cy.get("[data-cy=cart-empty]")
        .should("exist")
        .and("contain", "Votre panier est vide");
     })


    it("Test 2: ajouter un produit au panier et le supprimer ", () => {
        cy.login(); //Sur la page du site connecté configuré dans dossier support puis commond .js
        
        cy.getBySel("nav-link-products").should("be.visible");
        cy.getBySel("nav-link-products").click();
    
        cy.getBySel("product").eq(1).contains("Consulter").click();
        cy.getBySel("detail-product-quantity").clear().type("1");
        cy.getBySel("detail-product-add").click();
        cy.contains("Mon panier").click();

        // aller au panier et verifier que le produit existe (cart-line)
        cy.getBySel("cart-line").should("exist");

        // supprimer le produit de la carte
        cy.getBySel("cart-line-delete").click({ multiple: true });
         cy.getBySel("cart-empty").should("exist");

        
    });
    

    it("TEST 3: ajouter au panier un produit avec un stock negative ", () => {
        cy.login(); 

        // Navigate to product page and add product
        cy.getBySel("nav-link-products").should("be.visible");
        cy.getBySel("nav-link-products").click();
        cy.getBySel("product").eq(0).contains("Consulter").click();
        cy.getBySel("detail-product-quantity").clear().type("-3");
        cy.getBySel("detail-product-add").click();

        //wait and check no redirection
        cy.wait(1000)
        cy.url().should("not.contain", "cart");

        // go to pannier and check no objects
        cy.getBySel("nav-link-cart").click();
        cy.wait(1000)

        // verifier que le produit n'est pas dans le panier ainsi que le panier est vide
        cy.get("[data-cy=cart-empty]")
          .should("exist")
          .and("contain", "Votre panier est vide");

    });

    it("TEST 4: ajouter un produit avec un stock egale a 0 ", () => {
        cy.login();
      
        cy.getBySel("nav-link-products").should("be.visible");
        cy.getBySel("nav-link-products").click();
        cy.getBySel("product").eq(0).contains("Consulter").click();
        cy.getBySel("detail-product-quantity").clear().type("0");
        cy.getBySel("detail-product-add").click();
 

        //wait and check no redirection
        cy.wait(1000)
        cy.url().should("not.contain", "cart");

        // go to pannier and check no objects
        cy.getBySel("nav-link-cart").click();
        cy.wait(1000)

        // verifier que le produit n'est pas dans le panier ainsi que le panier est vide
        cy.get("[data-cy=cart-empty]")
          .should("exist")
          .and("contain", "Votre panier est vide");
    });

    it("TEST 5: Ajouter une quantité supérieur au stock ", () => {
        cy.login();
        cy.getBySel("nav-link-products").should("be.visible");
     
        cy.visit("/#/products/8");// visit l article id 8 qui cntient 6 articile enb stock
    
        // Vérifie que le stock est egale a 6
        cy.getBySel("detail-product-stock") 
          .should("exist")
          .and("contain", "6");

    
        // Ajoutez une qualitité égale à 20 au panier
        cy.getBySel("detail-product-quantity").clear().type("20");
        cy.getBySel("detail-product-add").click();
    
        //wait and check no redirection
         cy.wait(1000)
         cy.url().should("not.contain", "cart");
 
         // go to pannier and check no objects
         cy.getBySel("nav-link-cart").click();
         cy.wait(1000)
 
         // verifier que le produit n'est pas dans le panier ainsi que le panier est vide
         cy.get("[data-cy=cart-empty]")
           .should("exist")
           .and("contain", "Votre panier est vide");
    
    });


})





describe("XSS test de vulnérabilité ", () => {
    it("TEST 1: On ne Devrait pas pouvoir injecté du script malveillant", () => {

        cy.login();
        cy.wait(1000);
        cy.getBySel("nav-link-reviews").click();
        cy.get('[data-cy="review-input-rating-images"] img').first().click();

        //Injecter un code malveillant dans les champs du formulaire d'avis
        const malveillantScript = "<script>alert('XSS attack!')</script>";
        cy.getBySel("review-input-title").type("Ceci est injecter un script malveillant");
        cy.getBySel("review-input-comment").type(malveillantScript);

        cy.screenshot("before submit")
        //envoyer l'avis
        cy.getBySel("review-submit").click();
        cy.wait(1000);
        cy.screenshot("after submit")
         // Vérifiez que le script malveillant n'est pas présent dans le contenu de l'avis
         cy.getBySel("review-comment").should("not.contain", malveillantScript);
         cy.getBySel("review-title").should("not.contain", "Ceci est injecter un script malveillant");
         cy.screenshot()
     
    });


});

  
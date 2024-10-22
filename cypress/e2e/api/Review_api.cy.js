describe("Ajouter un avis ", () => {

    const apiLogin=`${Cypress.env("apiUrl")}/login`;
    it("TEST 1: Ajouter un avis avec valid token ", () => {
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
 
            cy.request({
            method: "POST",
            url: `${Cypress.env("apiUrl")}/reviews`,
            body: {
            title: "Exemple de titre d'avis",
            comment: "Exemple de commentaire",
            rating: "5", 
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

     

it("TEST 2: Ajouter un avis sans authentification ", () => {

        cy.request({
        method: "POST",
        url: `${Cypress.env("apiUrl")}/reviews`,
        body: {
        title: "Exemple de titre d'avis",
        comment: "Exemple de commentaire",
        rating: "5", 
         },
         failOnStatusCode: false, // Permet à la requête de réussir même si elle renvoie un code d'erreur
         }).then((response) => {
        // Vérifier que la réponse contient un code de statut 200
    expect(response.status).to.eq(401);
     });
   
});
});






















describe('template spec', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:8080/#/')

     // Find the connexion button and click it
     cy.get('a').contains('Connexion').click()
    
     // assertions here to verify the action
     cy.url().should('include', '/login')

  })
})
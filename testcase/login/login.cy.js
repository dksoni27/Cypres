describe('lonch website ', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://www.beckett.com/login')

      cy.get("input#loginPassword").type('devendras@beckett.com')
      
      
    })
  })
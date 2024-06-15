describe('firest test', () => {
  it('passes', () => {
    cy.visit('https://www.beckett.com')
    cy.get('.btn-outline-secondary-color').click()
    cy.get('#loginEmail').type("devendras@beckett.com")
    cy.get('#loginPassword').type("Dksoni@2716")
    cy.get('#login_submit').click()

  })
})
describe('firest test', () => {
    it('passes', () => {
      cy.visit('https://www.beckett.com/')
      cy.get('.navbar-toggler-icon').click()
      cy.get('.pb-2 > [href="https://www.beckett.com/online-price-guide"]').click()
      cy.get('#sport-slider > .active').click()
      cy.get('#subscribe_single_web').click()
      cy.get('#loginEmail').type("devendras@beckett.com")
      cy.get('.options-for > :nth-child(4)').click()
      cy.get('#loginPassword').type("Dksoni@2716")
      cy.get('#login_submit').click()
      cy.get('.modal-header > .close').click()
      cy.get('.col-md-offset-1 > .btn').click()

    })
  })

/// <reference types="Cypress" />
describe('blessio website login', () => {
    it('login', () => {
      cy.visit('/')
      //check website moved to login screen or not
      cy.get('[class="grid grid-cols-1 lg:grid-cols-2 items-center h-screen lg:bg-none"]').should('be.visible')
      cy.contains('Forgot password?').click()
      cy.contains('Recover Password').should('be.visible')
      cy.get('#email').type('test@testcom')
      cy.contains('Email a recovery link').click()
      // thorwing error - object reference not set instance of object
      // ernter recovery email - but email not received
    })
  })
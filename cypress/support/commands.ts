// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// login commands
Cypress.Commands.add("loginUI",()=>{
    cy.visit('/')
    //check website moved to login screen or not
    cy.get('[class="grid grid-cols-1 lg:grid-cols-2 items-center h-screen lg:bg-none"]').should('be.visible')
    // Entering Correct Email and Password  without checking remember me checkbox
      cy.get('[formcontrolname="userName"]').type('test@test.com')
      cy.get('[formcontrolname="password"]').type('Bb@1234')
      cy.contains('Login').click()
      //check app move to main or login successfully
      cy.contains(' Logged in Sucessfully ',{timeout:25000}).should('be.visible')
})
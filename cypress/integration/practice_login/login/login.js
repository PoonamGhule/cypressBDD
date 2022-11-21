
import { Given } from "cypress-cucumber-preprocessor/steps"


Given('Visit the practice automation site', () => {
    //cy.log('given')
    cy.visit('https://practicetestautomation.com/practice-test-login/')
})
When('Enter valid username', () => {
    //cy.log('when')
    cy.get('#username').type('student')
})
And('Enter the valid password', () => {
    //cy.log('and')
    cy.get('#password').type('Password123')
})
Then('Click on submit button', () => {
    //cy.log('then')
    cy.get('#submit').click()
})
And('Validate the dashboard', () => {
    // cy.log('and')
    cy.get('.post-title').should('have.text', "Logged In Successfully")
})


//invalid credantial
When('Enter invalid username', () => {
    //cy.log('when')
    cy.get('#username').type('student66')
})
And('Enter the invalid password', () => {
    //cy.log('and')
    cy.get('#password').type('Password1')
})
And('Validate the error', () => {
    // cy.log('and')
    cy.get('#error').should('have.text', 'Your username is invalid!')
})



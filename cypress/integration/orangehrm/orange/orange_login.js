
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


Given('Visit the orange hrm site', () => {
    //cy.log('given')
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})
When('Enter valid orange hrm username', () => {
    //cy.log('when')
    cy.get('input[name=username]').type('Admin')

})
And('Enter the valid orange hrm password', () => {
    //cy.log('and')
    cy.get('input[type=password]').type('admin123')

})
Then('Click on submit button', () => {
    //cy.log('then')
    cy.get('button[type=submit]').click()
})
And('Validate the orange hrm dashboard', () => {
    // cy.log('and')
    //cy.get('.oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module').should('have.text', 'PIM')
    cy.get('img[alt="client brand banner"]').should('be.visible')
})


//invalid credantial
When('Enter invalid username', () => {
    //cy.log('when')
    cy.get('input[name=username]').type('gfghfjhgjhjj')
})
And('Enter the invalid password', () => {
    //cy.log('and')
    cy.get('input[type=password]').type('jhghgh')
})
And('Validate the error', () => {
    // cy.log('and')
    cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
})



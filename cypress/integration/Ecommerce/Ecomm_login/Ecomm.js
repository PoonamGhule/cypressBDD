import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"


Given('Visit the practice automation site for login', () => {
    //cy.log('given')
    cy.visit('https://practice.automationtesting.in/my-account/')
})
When('Enter valid practice automation username and password', (data) => {
    data.hashes().forEach(element => {
        //cy.log('when')
        cy.get('#username').type(element.username)
        cy.get('#password').type(element.password)
    })
});

Then('Click on submit button', () => {
    //cy.log('then')
    cy.get('[name="login"]').click()
})
And('Validate the dashboard text', () => {
    //cy.log('and')
    cy.get('.is-active > a').should('have.text', "Dashboard")
})
When('Enter valid practice automation {string} and {string}', (username, password) => {

    //cy.log('when')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
})


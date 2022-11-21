import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', function () {
  cy.log('given')
  cy.visit(url)
})
Given('I open youtube home page', function() {
  cy.log('given')
cy.visit('https://www.youtube.com')
  })
Then(`I see {string} in the title`, (title) => {
  cy.log('then')
  cy.title().should('include', title)
})
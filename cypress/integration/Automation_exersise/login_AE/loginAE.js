import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

let myfile="info.xlsx"
Given('Visit the Automation Exersise site', () => {
    cy.log('given')
    cy.visit('https://automationexercise.com/signup')
 })
When('Enter username and password', () => {
    cy.log('given')
    cy.get('[name="email"]').first().type('gauri@gmail.com')
    cy.get('[name="password"]').type('Gauri99')
})

Then('click login button', () => {
    cy.log('then')
    cy.get('[data-qa="login-button"]').click()
})
And('Validate the dashboard', () => {
    cy.log('and')
    cy.contains('Full-Fledged practice website for Automation Engineers').should("be.visible")
})

Given('open then contactus page', () => {
    cy.log('given')
    cy.get('[href="/contact_us"]').click()
})
When('add your details', () => {
    cy.log('given')
     cy.get('[name="name"]').type('Poonam')
    cy.get('[name="email"]').type('punamtambe27@gmail.com')
    cy.get('[name="subject"]').type('enquiry')
    cy.get('[id="message"]').type('give more info about your site')
    cy.get('[name="upload_file"]').attachFile(myfile)
    cy.get('[data-qa="submit-button"]').click()
})

Then('validate the file upload message', () => {
    cy.log('then')
    cy.get('[class="status alert alert-success"]').should('have.text','Success! Your details have been submitted successfully.')
})


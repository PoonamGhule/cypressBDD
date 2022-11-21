import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

import  HomePage  from "../HomePage"

let selector = new HomePage
Given('Visits the online vegies sites', () => {
    cy.log('given')
    //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    selector.visiturl()

})
When('Enter the veggies name which start from {string}', (page) => {
    cy.log('when')
    cy.get(".search-keyword").type(page)
    cy.get('.search-button').click()


})
And('Clicks on the {string} cart', (veg) => {
    cy.log('and')
    cy.get('h4[class="product-name"]').each((el, i) => {
        cy.log(el.text())
        let veggi = el.text().replace("- 1 Kg", " ").trim()
        if (veggi == veg) {
            cy.get("[class='product-action'] button").eq(i).click()
        }
    })

})
Then('place the order and select country and click check box', () => {
    cy.log('then')
    cy.get("img[alt='Cart']").click()
    cy.get('[class="action-block"] button').first().click()
    cy.contains("Place Order").click()
    cy.get('select').select('India')
    cy.get('[class="chkAgree"]').click()
    cy.get('button').click()

})
And('Validate the thank you message on dashboard', () => {
    cy.log('and')
    cy.contains('Thank you, your order has been placed successfully').should('be.visible')

})

//Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!
import { Given, Then } from "cypress-cucumber-preprocessor/steps"

let id;
Given('user send GET request toretrive multiple users', () => {
    cy.log('given')
    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users?page=2"
    }).as('getuser')
})
Then('users list should be display', () => {
    cy.log('then')
    cy.get('@getuser').then(function(res){
        cy.log(res)
        expect(res.status).to.eq(200)
        expect(res.body.page).to.eq(2)
        expect(res.statusText).to.eq('OK')
        
    })
})

Given('user send POST request toretrive multiple users with {string} and {string}', (name,job) => {
    cy.log('given')
    cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        body:{
                "name":name,
                "job": job
        }
    }).as('postuser')
})
Then('users should be display with {string} and {string}', (name,job) => {
    cy.log('then')
    cy.get('@postuser').then(function(res){
        cy.log(res)
        expect(res.status).to.eq(201)
        expect(res.statusText).to.eq('Created')
        expect(res.body.name).to.eq(name)
        expect(res.body.job).to.eq(job)
        id=res.body.id
    })
})

Given('user send PUT request toretrive multiple users with {string} and {string}', (name,job) => {
    cy.log('given')
    cy.request({
        method: "PUT",
        url: `https://reqres.in/api/users/${id}`,
        body:{
                "name":name,
                "job": job
        }
    }).as('updateuser')
})
Then('users should be updated with {string} and {string}', (name,job) => {
    cy.log('then')
    cy.get('@updateuser').then(function(res){
        cy.log(res)
        expect(res.status).to.eq(200)
        expect(res.statusText).to.eq('OK')
        expect(res.body.name).to.eq(name)
        expect(res.body.job).to.eq(job)
    })
})

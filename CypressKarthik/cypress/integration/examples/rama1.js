/// <reference types="Cypress" />

describe("Testing of Executive Automation Application", ()=>{

    it("Login Application",()=>{
        cy.visit("http://www.eaapp.somee.com")
        cy.contains("Login").click()
        cy.url().should("include","/Account/Login")

        cy.get('#UserName').type('admin')
        cy.get('#Password').type('password')
        cy.get('.btn').click()
    })
})
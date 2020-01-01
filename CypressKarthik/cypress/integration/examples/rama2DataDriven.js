/// <reference types="Cypress" />

describe('DataDriven test using Cypress fixtures', () => {

    before('Login to Application', () => {
        cy.visit('http://eaapp.somee.com/')
        cy.fixture('dataDriven').as('userData')
    })

    it('Reading values from dataDriven.json', () => {
        cy.contains('Login').click()

        cy.get('@userData').then((userData) => {
            cy.get('#UserName').type(userData.userName)
            cy.get('#Password').type(userData.password)
        })

        cy.get('.btn').click()
    })

    it.only('Creating Cypress Custom Commands',() =>{
        cy.contains('Login').click()
        cy.get('@userData').then((userData) => {
            cy.login(userData.userName,userData.password)
        })
    })
})
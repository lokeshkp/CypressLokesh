/// <reference types="Cypress" />

describe('My Third Suite', function () {
    it('My First TestCase', function () {
        cy.visit(Cypress.env('preUat')+'practice.php');
        cy.get("[value='Alert']").click()
        cy.get("[value='Confirm']").click()
        // Cypress having inbuilt capability that it will automatically handel Alerts but if want to run by your self follow the bellow code.,
        cy.on('window:alert', (str) => {
            expect(str).equals('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str1) => {
            expect(str1).equals('Hello , Are you sure you want to confirm?')
        })

        // Handeling multiple tab (cypress not supports hence taking jquery help..)
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', Cypress.env('preUat'))
        cy.go('back')

    })
})
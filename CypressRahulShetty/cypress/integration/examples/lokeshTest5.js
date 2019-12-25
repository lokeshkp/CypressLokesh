/// <reference types="Cypress" />

describe('My Fourth Test Suite', function () {
    it('My First TestCase', function () {
        cy.visit(Cypress.env('prodUrl')+'AutomationPractice/');
        //cy.get('.mouse-hover-content').invoke("show")
        cy.contains('Reload').click({force:true})
        cy.url().should('include','AutomationPractice')
      
        cy.get('#opentab').then(function(el){
            var url =el.prop('href')
            cy.log(url)
        })

    })
})


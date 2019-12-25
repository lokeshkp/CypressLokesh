
/// <reference types="Cypress" />

describe('My Second suite', function () {
    it('My First Test Case', function () {

        // check box, static & dynamic select fields practice.. 
        cy.visit(Cypress.env('prodUrl')+'AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option3', 'option1'])
        cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2')
        cy.get('#autocomplete').type("Ind")
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                $el.click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')
    })
    it('My Second TestCase', function () {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

})
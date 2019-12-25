/// <reference types="Cypress" />

describe('My Fourth Test Suite', function () {
    it('My First TestCase', function () {
        cy.visit(Cypress.env('prodUrl')+'AutomationPractice/');
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const txt = $el.text()
            if (txt.includes('Master')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const priceTxt = price.text()
                    expect(priceTxt).to.equal('25')
                })
            }
        })
    })
})


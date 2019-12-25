// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

Cypress.Commands.add("selectDress", (dressName) => {
    cy.get("#center_column").find(".product-container").find('div.right-block').each(($el, index, $list) => {

        cy.log("button title->" + $el.find(".button.ajax_add_to_cart_button.btn.btn-default").text())
        const textItem = $el.find("a.product-name").text().trim()
        cy.log(textItem)

        if (textItem == dressName) {
            cy.get("a.button.ajax_add_to_cart_button.btn.btn-default").eq(index).click()
        }
    })
})



//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

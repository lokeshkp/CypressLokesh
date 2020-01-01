/// <reference types="Cypress" />

describe('Verifying XHR request',() =>{

    before('Accessing lambdaTest app',()=>{
        cy.visit('https://accounts.lambdatest.com/login')
        cy.fixture('dataDriven').as('userData')
    })

    it('Login lambdatest app to verify XHR request and cookies',()=>{
       
        cy.server()
        cy.route({
            method:'GET',
            url:'api/user/organization/team'
        }).as('xhrTeam')


        cy.get('@userData').then((user) =>{
            cy.get('[name="email"]').debug().type(user.xhrUname)
            cy.get('[name="password"]').debug().type(user.xhrpassword)
        })
       
        cy.get('.btn.btn-dark.submit-btn').click()

        cy.get('@xhrTeam').then((xhrTeam) =>{
            expect(xhrTeam.status).to.eql(200)
            expect(xhrTeam.response.body.data[0]).to.have.property('name','Lokesh')
        })

        cy.getCookie('user_id').should('have.property','value','133629')
    })
})

/// <reference types="Cypress" />

context('Cypress with API Testing..', () => {

    it("GET Student information from student app server", () => {
        cy.request('http://localhost:8080/student/101').its('body').should('have.property','firstName','Pavani')
    })

    /*

    it("POST Creating new student to student app server", () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/student',
            body: {
                "id": 101,
                "firstName": "Pavani",
                "lastName": "Kondepudi",
                "email": "kppavani@gmail.com",
                "programme": "Computer Science",
                "courses": ["Python", "Cypress", "AI"]
            }
        }).then((res) => {
            expect(res.status).to.eql(201)
        })
    })

    it('DELETE before creating a new record', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:8080/student/108'
        }).then((res) => {
            expect(res.status).to.eql(204)
        })
    })

    */

})
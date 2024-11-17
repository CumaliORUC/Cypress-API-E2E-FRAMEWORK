describe("EndToEnd", () => {

    function generateEmail() {
        const randomText = Math.random().toString(36).substring(2, 10)
        const email = randomText + "@email.com"
        return email
    }


    it('EndToEnd Flow', () => {
        let payload = {
            "name": "Gulcem42",
            "email": generateEmail(),
            "gender": "female",
            "status": "Active"
        }

        let payloadPUT = {
            "name": "Gulcem44"
        }
        cy.postAPI(payload).then((response) => {
            expect(response.status).to.equal(201)
            let id = response.body.id

            cy.getAPI(id).then((responseGet) => {
            expect(responseGet.status).to.equal(200)
            })


            cy.putAPI(id, payloadPUT).then((responsePut) => {
            expect(responsePut.status).to.equal(200)
            expect(responsePut.body).has.property("name", "Gulcem44")
            })

            cy.deleteAPI(id).then((responseDelete) => {
            expect(responseDelete.status).to.equal(204)
            })

        })

    })
})
/// <reference types="cypress" />

describe('Given the Users api', () => {
    context('When I send DELETE /usuarios passing id query param', () => {
        it('Then it should DELETE that particular user', () => {
            cy.request({
                method: 'DELETE',
                url: 'https://serverest.dev/usuarios',
                qs: {
                    _id: 'lNmt4t9k7ACjnjOb'
                },
                failOnStatusCode: false

            })
                .should((response) => {
                    expect(response.status).to.eq(200)
              //      expect(response.body.usuarios[0].nome).to.eq("Fulano da Silva")
                });
        });
    });
});
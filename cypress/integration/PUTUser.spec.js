/// <reference types="cypress" />

describe('Given the Users api', () => {
context('When I use PUT /usuarios', () => {
    it('Then it should PUT in record', () => {

        cy.request({
            method: 'PUT',
            url: 'https://serverest.dev/usuarios',
            body: {                
                    nome: "Fulano da Silva",
                    email: "beltrano@qa.com.br",
                    password: "teste",
                    administrador: "true"                  
            },
          

        })
            .should((response) => {
                expect(response.status).eq(200)
                expect(response.body.message).eq("Registro excluído com sucesso | Nenhum registro excluíd")
            });
    });
});
});
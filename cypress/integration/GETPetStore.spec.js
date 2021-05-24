/// <reference types="cypress" />

describe('Given the Users api', () => {
    context('When I send GET REQUEST', () => {
        it('Getting list of services using GET method command', () => {
            cy.request({
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/store/inventory'              
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))

                });
        });
    });

    context('When I send POST REQUEST', () => {
        it('order placing with POST method command', () => {
            cy.request({
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/store/order',
                body: {
                    
                        id: 0,
                        petId: 0,
                        quantity: 0,
                        shipDate: "2021-05-24T17:47:47.464Z",
                        status: "placed",
                        complete: true,
                      
                },         
            })     
            
                .should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body).property('id').to.not.be.oneOf([null, ""])
                    expect(response.body).to.have.property('id')
                    expect(response.body).to.have.property('status')
                    cy.log(JSON.stringify(response.body))

               
        });
    });
});

context('When I send GET REQUEST WITH QUERY STRING QS', () => {
    it('order placing with POST method command', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/store/order',
            qs: {
                orderId : 1,               
            },     
        })     
        
            .should((response) => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))

           
    });
});
});





});


 
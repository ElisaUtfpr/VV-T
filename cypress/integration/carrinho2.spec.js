describe('carrinho spec', () => {

    it('Adiciona duas unidades ao carrinho e ve se realmete foram inseridos', () => {
    cy.visit('https://www.amazon.in/Bella-Vita-Organic-Perfumes-Fragrance/dp/B09232XNTX/ref=sr_1_6?crid=1GG5SR93IRWL3&keywords=perfumes&qid=1701975893&sprefix=%2Caps%2C686&sr=8-6');
    cy.get('#quantity').select('2')
    cy.get('#add-to-cart-button').click()
    cy.get('#nav-cart-count')
    .should('have.text', '2')
    cy.scrollTo('top')

})


  })
describe('Entra em um item  spec', () => {

    it('login bem-sucedido', () => {
    cy.visit('https://amazon.in');
    cy.get('#nav-link-accountList-nav-line-1').click();
    cy.get('#ap_email').click().type("elisacichella@alunos.utfpr.edu.br" /*digite o nome de usuário correto*/);
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').click().type("kbnada86" /*digite a senha correta*/);
    cy.get('#signInSubmit').click();
  })

  it("realiza uma pesquisa e clica em um item   ", () => {
        
    cy.get('#twotabsearchtextbox').click()
    cy.get('#twotabsearchtextbox').type("perfumes")
    cy.get('#nav-search-submit-button').click();
    cy.get('[data-index="8"]').click()

})


  })
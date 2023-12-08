describe('Carrinho spec', () => {

    it('login bem-sucedido', () => {
    cy.visit('https://amazon.in');
    cy.get('#nav-link-accountList-nav-line-1').click();
    cy.get('#ap_email').click().type("elisacichella@alunos.utfpr.edu.br" /*digite o nome de usuário correto*/);
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').click().type("kbnada86" /*digite a senha correta*/);
    cy.get('#signInSubmit').click();
  })

  it("realiza uma pesquisa de mouse ", () => {
        
    cy.get('#twotabsearchtextbox').click()
    cy.get('#twotabsearchtextbox').type("Mouse")
    cy.get('#nav-search-submit-button').click()
    
})


  })
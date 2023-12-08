describe('Login spec', () => {

//para nome de usuário correto, mas senha errada
  it('usuário certo e senha errada', () => {
    cy.visit('https://amazon.in');
    cy.get('#nav-link-accountList-nav-line-1').click();
    cy.get('#ap_email').click().type("elisacichella@alunos.utfpr.edu.br"/*digite o nome de usuário correto*/);
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').click().type("guguu"/*digite a senha errada*/);
    cy.get('#signInSubmit').click();
    cy.wait(2000);
  })


})
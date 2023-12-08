///  <reference types="cypress"/>

describe('Login spec ',()  => {
    
    it('Login errado Amazon com telefone incorreto',()=>{

      cy.visit('https://www.amazon.com.br')
      cy.get('#nav-link-accountList > .nav-line-2').click()
      cy.get('#ap_email').type('25222453145')
      cy.get('.a-button-inner > #continue').click()
      cy.get('.a-alert-heading').should('contain.text', 'Número de telefone incorreto')

    })

  

  

 })
describe("Teste Variados spec", () => {


    it("Valida se a logo da Amazon esta visivel ", () => {
        cy.visit("https://www.amazon.com/")

        cy.get('#nav-logo-sprites').should("be.visible")

    })

    
    it("Valida se o copyright é visivel ", () => {
        cy.visit("https://www.amazon.com/")

        cy.get('.navFooterCopyright > :nth-child(2)').should("be.visible")

        
    })

    it("Ver se é possivel mudar o idioma", () => {
        cy.visit('https://amazon.in');
        cy.get('#icp-nav-flyout').click()
        cy.get(':nth-child(6) > .a-radio > label > .a-icon').click()
        cy.get('#icp-save-button > .a-button-inner > .a-button-input').click()

    })




    it('Escolhendo CEP',() => {

        cy.visit('https://www.amazon.com.br')
        cy.get('#glow-ingress-line2').click()
        cy.get('#GLUXZipUpdateInput_0').type('85660')
        cy.get('#GLUXZipUpdateInput_1').type('000')
        cy.get('#GLUXZipUpdate').click()
        cy.get('#glow-ingress-line2').should('contain.text', '85660000')
       
      })
      it('Selecionando departamento',() => {

        cy.visit('https://www.amazon.com.br')
        cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').click()
        cy.get('#zg_banner_text').should('contain.text','Mais vendidos')
        
      })
  


})
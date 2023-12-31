describe('Teste Cypress', () => {
  it('Testar Cadastro', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')
    cy.wait(1000)
    cy.get('a[href="cadastrar.html"]').click() 
    cy.get('input[name="user_name"]').type('Bia')
    cy.get('input[name="user_email"]').type('cypress@teste.com')
    cy.get('input[name="user_password"]').type('cypress')
    cy.get('input[name="user_confirm_password"]').type('cypress')
    cy.get('button[type="submit"]').click()
    cy.contains('Você está logado!').should('be.visible')
  })

  it('Testar Login', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')
    cy.wait(1000)
    cy.get('input[name="user_email"]').type('cypress@teste.com')
    cy.get('input[name="user_password"]').type('cypress')
    cy.get('button[type="submit"]').click()
    cy.contains('Você está logado!').should('be.visible')
  })
})
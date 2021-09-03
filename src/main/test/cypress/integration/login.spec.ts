describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Should load with correct initial state', () => {
    // Input status Refused
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Campo obrigatório')
      .should('have.css', 'background-color', 'rgb(255, 0, 0)')
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Campo obrigatório')
      .should('have.css', 'background-color', 'rgb(255, 0, 0)')

    // Submit button disabled
    cy.getByTestId('submit').should('have.attr', 'disabled')

    // Error-wrap empty
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})

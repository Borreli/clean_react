import faker from 'faker'
import * as FormHelper from '../support/form-helper'
import * as Mock from '../support/login-mocks'

const simulateValidSubmit = (): void => {
  cy.getByTestId('email').focus().type(faker.internet.email())
  cy.getByTestId('password').focus().type(faker.random.alphaNumeric(5))
  cy.getByTestId('submit').click()
}

describe('Login', () => {
  beforeEach(() => {
    cy.server()
    cy.visit('login')
  })

  it('Should load with correct initial state', () => {
    // Input status Refused
    cy.getByTestId('email').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('email', 'Campo obrigatório')

    cy.getByTestId('password').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('password', 'Campo obrigatório')

    // Submit button disabled
    cy.getByTestId('submit').should('have.attr', 'disabled')

    // Error-wrap empty
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('email').focus().type(faker.random.word())
    FormHelper.testInputStatus('email', 'Valor inválido!')

    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(3))
    FormHelper.testInputStatus('password', 'Valor inválido!')

    cy.getByTestId('submit').should('have.attr', 'disabled')

    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    FormHelper.testInputStatus('email')

    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(5))
    FormHelper.testInputStatus('password')

    cy.getByTestId('submit').should('not.have.attr', 'disabled')

    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present InvalidCredentialsError on 401', () => {
    Mock.loginMockInvalidCredentialsError()
    simulateValidSubmit()
    FormHelper.testMainError('Credenciais Inválidas')
    FormHelper.testUrl('/login')
  })

  it('Should present UnexpectedError on default error cases', () => {
    Mock.loginMockUnexpectedError()
    simulateValidSubmit()
    FormHelper.testMainError('Algo de errado aconteceu. Tente novamente mais tarde.')
    FormHelper.testUrl('/login')
  })

  it('Should present UnexpectedError if invalid data is returned', () => {
    Mock.loginMockInvalidData()
    simulateValidSubmit()
    FormHelper.testMainError('Algo de errado aconteceu. Tente novamente mais tarde.')
    FormHelper.testUrl('/login')
  })

  it('Should save accessToken if valid credentials are provided', () => {
    Mock.loginMockOk()
    simulateValidSubmit()
    cy.getByTestId('error-wrap').should('not.have.descendants')
    FormHelper.testUrl('/')
    FormHelper.testLocalStorageItem('accessToken')
  })

  it('Should prevent multiple submits', () => {
    Mock.loginMockOk()
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(5))
    cy.getByTestId('submit').dblclick()
    FormHelper.testHttpCallsCount(1)
  })

  it('Should not call submit if form is invalid', () => {
    Mock.loginMockOk()
    cy.getByTestId('email').focus().type(faker.internet.email()).type('{enter}')
    FormHelper.testHttpCallsCount(0)
  })
})

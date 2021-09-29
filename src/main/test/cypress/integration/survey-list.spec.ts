import faker from 'faker'
import * as Helper from '../support/helpers'
import * as Mock from '../support/survey-list-mocks'

describe('SurveyList', () => {
  beforeEach(() => {
    Helper.setLocalStorageItem('account', { accessToken: faker.datatype.uuid(), name: faker.name.findName() })
    cy.server()
  })

  it('Should present error on UnexpectedError', () => {
    Mock.mockUnexpectedError()
    cy.visit('')
    cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente mais tarde.')
  })
})

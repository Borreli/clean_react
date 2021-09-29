import faker from 'faker'
import * as Http from './http-mocks'

export const signUpMockEmailInUseError = (): void => Http.mockForbiddenError(/signup/, 'POST')
export const signUpMockUnexpectedError = (): void => Http.mockServerError(/signup/, 'POST')
export const signUpMockOk = (): void => Http.mockOk(/signup/, 'POST', { accessToken: faker.datatype.uuid(), name: faker.name.findName() })

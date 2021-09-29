import faker from 'faker'
import * as Http from './http-mocks'

export const loginMockInvalidCredentialsError = (): void => Http.mockUnauthorizedError(/login/)
export const loginMockUnexpectedError = (): void => Http.mockServerError(/login/, 'POST')
export const loginMockOk = (): void => Http.mockOk(/login/, 'POST', { accessToken: faker.datatype.uuid(), name: faker.name.findName() })

import faker from 'faker'
import * as Helper from './http-mocks'

export const loginMockInvalidCredentialsError = (): void => Helper.mockInvalidCredentialsError(/login/)
export const loginMockUnexpectedError = (): void => Helper.mockUnexpectedError(/login/, 'POST')
export const loginMockOk = (): void => Helper.mockOk(/login/, 'POST', { accessToken: faker.datatype.uuid() })
export const loginMockInvalidData = (): void => Helper.mockOk(/login/, 'POST', { invalid: faker.datatype.uuid() })

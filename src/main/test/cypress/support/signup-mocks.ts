import faker from 'faker'
import * as Helper from './http-mocks'

export const signUpMockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)
export const signUpMockUnexpectedError = (): void => Helper.mockUnexpectedError(/signup/, 'POST')
export const signUpMockOk = (): void => Helper.mockOk(/signup/, 'POST', { accessToken: faker.datatype.uuid(), name: faker.name.findName() })
export const signUpMockInvalidData = (): void => Helper.mockOk(/signup/, 'POST', { invalid: faker.datatype.uuid() })

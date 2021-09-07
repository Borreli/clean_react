import faker from 'faker'
import * as Helper from './http-mocks'

export const signUpMockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)
export const signUpMockUnexpectedError = (): void => Helper.mockUnexpectedError(/signup/, 'POST')

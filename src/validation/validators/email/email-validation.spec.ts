import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from '@/validation/validators/email/email-validation'

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const field = 'email'
    const sut = new EmailValidation(field)
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError(field))
  })
})

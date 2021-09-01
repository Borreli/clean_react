import { InvalidFieldError } from '@/validation/errors'
import { CompareFieldsValidation } from '@/validation/validators/compare-fields/compare-fields-validation'
import faker from 'faker'

const makeSut = (field: string, fieldToCompare: string): CompareFieldsValidation => {
  return new CompareFieldsValidation(
    field,
    fieldToCompare
  )
}

describe('CompareFieldsValidation', () => {
  test('Should return error if compare is invalid', () => {
    const field = 'column1'
    const fieldToCompare = 'column2'
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({
      [field]: 'test',
      [fieldToCompare]: 'otherTest'
    })
    expect(error).toEqual(new InvalidFieldError(sut.field))
  })

  test('Should return falsy if compare is valid', () => {
    const field = 'column1'
    const fieldToCompare = 'column2'
    const value = faker.random.word()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({
      [field]: value,
      [fieldToCompare]: value
    })
    expect(error).toBeFalsy()
  })
})

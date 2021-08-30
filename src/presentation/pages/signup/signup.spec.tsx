import React from 'react'
import faker from 'faker'
import SignUp from '@/presentation/pages/signup/signup'
import { cleanup, render, RenderResult } from '@testing-library/react'
import { FormHelper, ValidationStub } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const sut = render(
    <SignUp
      validation={validationStub}
    />
  )
  return {
    sut
  }
}

describe('Signup Component', () => {
  afterEach(cleanup)

  test('Should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })

    FormHelper.testChildCount(sut, 'error-wrap', 0)

    // Should start with submit button disabled
    FormHelper.testButtonIsDisabled(sut, 'submit', true)

    // Should be email and password required inputs
    FormHelper.testStatusForField(sut, 'name', validationError)
    FormHelper.testStatusForField(sut, 'email', validationError)
    FormHelper.testStatusForField(sut, 'password', validationError)
    FormHelper.testStatusForField(sut, 'passwordConfirmation', validationError)
  })

  test('Should show name error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    FormHelper.populateField(sut, 'name')
    FormHelper.testStatusForField(sut, 'name', validationError)
  })

  test('Should show email error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    FormHelper.populateField(sut, 'email')
    FormHelper.testStatusForField(sut, 'email', validationError)
  })

  test('Should show password error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    FormHelper.populateField(sut, 'password')
    FormHelper.testStatusForField(sut, 'password', validationError)
  })

  test('Should show passwordConfirmation error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    FormHelper.populateField(sut, 'passwordConfirmation')
    FormHelper.testStatusForField(sut, 'passwordConfirmation', validationError)
  })

  test('Should show valid name if Validation succeeds', () => {
    const { sut } = makeSut()
    FormHelper.populateField(sut, 'name')
    FormHelper.testStatusForField(sut, 'name')
  })

  test('Should show valid email if Validation succeeds', () => {
    const { sut } = makeSut()
    FormHelper.populateField(sut, 'email')
    FormHelper.testStatusForField(sut, 'email')
  })

  test('Should show valid password if Validation succeeds', () => {
    const { sut } = makeSut()
    FormHelper.populateField(sut, 'password')
    FormHelper.testStatusForField(sut, 'password')
  })

  test('Should show valid passwordConfirmation if Validation succeeds', () => {
    const { sut } = makeSut()
    FormHelper.populateField(sut, 'passwordConfirmation')
    FormHelper.testStatusForField(sut, 'passwordConfirmation')
  })

  test('Should enable submit button if form is valid', () => {
    const { sut } = makeSut()
    FormHelper.populateField(sut, 'name')
    FormHelper.populateField(sut, 'email')
    FormHelper.populateField(sut, 'password')
    FormHelper.populateField(sut, 'passwordConfirmation')
    FormHelper.testButtonIsDisabled(sut, 'submit', false)
  })
})

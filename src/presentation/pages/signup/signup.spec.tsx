import React from 'react'
import faker from 'faker'
import SignUp from '@/presentation/pages/signup/signup'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
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

const populateField = (
  sut: RenderResult,
  fieldName: string,
  value = faker.random.word()
): void => {
  const input = sut.getByTestId(fieldName)
  fireEvent.input(input, { target: { value } })
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
    FormHelper.testStatusForField(sut, 'email', 'Campo obrigatório')
    FormHelper.testStatusForField(sut, 'password', 'Campo obrigatório')
    FormHelper.testStatusForField(sut, 'passwordConfirmation', 'Campo obrigatório')
  })

  test('Should show name error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populateField(sut, 'name')
    FormHelper.testStatusForField(sut, 'name', validationError)
  })
})

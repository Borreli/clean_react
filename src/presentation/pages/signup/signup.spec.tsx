import React from 'react'
import SignUp from '@/presentation/pages/signup/signup'
import { render, RenderResult } from '@testing-library/react'
import { FormHelper } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <SignUp />
  )
  return {
    sut
  }
}

describe('Signup Component', () => {
  test('Should start with initial state', () => {
    const validationError = 'Campo obrigatório'
    const { sut } = makeSut()

    FormHelper.testChildCount(sut, 'error-wrap', 0)

    // Should start with submit button disabled
    FormHelper.testButtonIsDisabled(sut, 'submit', true)

    // Should be email and password required inputs
    FormHelper.testStatusForField(sut, 'name', validationError)
    FormHelper.testStatusForField(sut, 'email', validationError)
    FormHelper.testStatusForField(sut, 'password', validationError)
    FormHelper.testStatusForField(sut, 'passwordConfirmation', validationError)
  })
})

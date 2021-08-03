import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Login from './login'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Login />)
  return {
    sut
  }
}

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { sut } = makeSut()

    // Should not render spinner and error message
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)

    // Should start with submit button disabled
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)

    // Should...
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.className).toContain('statusRefused')
    const passwordStatus = sut.getByTestId('email-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.className).toContain('statusRefused')
  })
})

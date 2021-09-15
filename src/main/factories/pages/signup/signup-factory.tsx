import { makeSignUpValidation } from '@/main/factories/pages/signup/signup-validation-factory'
import { makeRemoteAddAccount } from '@/main/factories/usecases/add-account/remote-add-account-factory'
import { makeLocalUpdateCurrentAccount } from '@/main/factories/usecases/update-current-account/local-update-current-account-factory'
import { SignUp } from '@/presentation/pages'
import React from 'react'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      validation={makeSignUpValidation()}
      addAccount={makeRemoteAddAccount()}
      updateCurrentAccount={makeLocalUpdateCurrentAccount()}
    />
  )
}

import { makeLoginValidation } from '@/main/factories/pages/login/login-validation-factory'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import { makeLocalUpdateCurrentAccount } from '@/main/factories/usecases/update-current-account/local-update-current-account-factory'
import { Login } from '@/presentation/pages'
import React from 'react'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      updateCurrentAccount={makeLocalUpdateCurrentAccount()}
    />
  )
}

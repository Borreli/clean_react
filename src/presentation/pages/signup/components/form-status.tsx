import React from 'react'
import { FormStatusBase } from '@/presentation/components'
import { useRecoilValue } from 'recoil'
import { signupState } from '@/presentation/pages/signup/components'

const FormStatus: React.FC = () => {
  const state = useRecoilValue(signupState)
  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus

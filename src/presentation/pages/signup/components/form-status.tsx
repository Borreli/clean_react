import React from 'react'
import { FormStatusBase } from '@/presentation/components'
import { useRecoilState } from 'recoil'
import { signupState } from '@/presentation/pages/signup/components'

const FormStatus: React.FC = () => {
  const [state] = useRecoilState(signupState)
  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus

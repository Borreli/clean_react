import React from 'react'
import { InputBase } from '@/presentation/components'
import { useRecoilState } from 'recoil'
import { signupState } from '@/presentation/pages/signup/components'

type Props = {
  type: string
  name: string
  placeholder: string
}

const Input: React.FC<Props> = ({ type, name, placeholder }: Props) => {
  const [state, setState] = useRecoilState(signupState)
  return (
    <InputBase
      type={type}
      name={name}
      placeholder={placeholder}
      state={state}
      setState={setState}
    />
  )
}

export default Input

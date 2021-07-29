import React from 'react'
import Styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <i className={`em em-red_circle ${Styles.status}`} aria-role="presentation" aria-label="LARGE RED CIRCLE"></i>
    </div>
  )
}

export default Input

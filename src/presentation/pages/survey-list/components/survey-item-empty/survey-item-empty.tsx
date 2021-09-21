import { Icon, IconName } from '@/presentation/components'
import React from 'react'
import Styles from './survey-item-empty-styles.scss'

const SurveyItemEmpty: React.FC = () => {
  return (
    <>
      <li className={Styles.surveyItemEmpty}></li>
      <li></li>
      <li></li>
      <li></li>
    </>
  )
}

export default SurveyItemEmpty

import { Calendar } from '@/presentation/components'
import React from 'react'
import Styles from './result-styles.scss'
import { Link } from 'react-router-dom'
import { LoadSurveyResult } from '@/domain/usecases'
import { SurveyResultAnswer } from '@/presentation/pages/survey-result/components'

type Props = {
  surveyResult: LoadSurveyResult.Model
}

const Result: React.FC<Props> = ({ surveyResult }: Props) => {
  return (
    <>
      <hgroup>
        <Calendar className={Styles.calendarWrap} date={surveyResult.date} />
        <h2 data-testid="question">{surveyResult.question}</h2>
      </hgroup>
      <ul data-testid="answers" className={Styles.answersList}>
        {surveyResult.answers.map(answer => <SurveyResultAnswer key={answer.answer} answer={answer} />)}
      </ul>
      <footer className={Styles.footerBack}><Link data-testid="back-button" to="/">Voltar</Link></footer>
    </>
  )
}

export default Result

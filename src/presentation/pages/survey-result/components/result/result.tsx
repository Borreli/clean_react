import { Calendar } from '@/presentation/components'
import FlipMove from 'react-flip-move'
import { useHistory } from 'react-router'
import React from 'react'
import Styles from './result-styles.scss'
import { LoadSurveyResult } from '@/domain/usecases'
import { SurveyResultAnswer } from '@/presentation/pages/survey-result/components'

type Props = {
  surveyResult: LoadSurveyResult.Model
}

const Result: React.FC<Props> = ({ surveyResult }: Props) => {
  const { goBack } = useHistory()
  return (
    <>
      <hgroup>
        <Calendar className={Styles.calendarWrap} date={surveyResult.date} />
        <h2 data-testid="question">{surveyResult.question}</h2>
      </hgroup>
      <FlipMove data-testid="answers" className={Styles.answersList}>
        <>
          {surveyResult.answers.map(answer => <SurveyResultAnswer key={answer.answer} answer={answer} />)}
        </>
      </FlipMove>
      <button data-testid="back-button" className={Styles.button} onClick={goBack}>Voltar</button>
    </>
  )
}

export default Result

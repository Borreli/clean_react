import { Calendar, Error, Footer, Header, Loading } from '@/presentation/components'
import React, { useEffect, useState } from 'react'
import Styles from './survey-result-styles.scss'
import FlipMove from 'react-flip-move'
import { LoadSurveyResult } from '@/domain/usecases'

type Props = {
  loadSurveyResult: LoadSurveyResult
}

const SurveyResult: React.FC<Props> = ({ loadSurveyResult }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    error: '',
    surveyResult: null as LoadSurveyResult.Model
  })

  useEffect(() => {
    loadSurveyResult.load()
      .then(surveyResult => setState(old => ({ ...old, surveyResult })))
      .catch()
  }, [])

  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <div data-testid="survey-result" className={Styles.contentWrap}>
        { state.surveyResult &&
          <>
            <hgroup>
              <Calendar className={Styles.calendarWrap} date={state.surveyResult.date} />
              <h2 data-testid="question">{state.surveyResult.question}</h2>
            </hgroup>
            <FlipMove data-testid="answers" className={Styles.answersList}>
              {state.surveyResult.answers.map(answer =>
                <li data-testid="answer-wrap" key={answer.answer} className={answer.isCurrentAccountAnswer ? Styles.active : '' }>
                  {answer.image && <img data-testid="image" src={answer.image} alt={answer.answer} />}
                  <span data-testid="answer" className={Styles.answer}>{answer.answer}</span>
                  <span data-testid="percent" className={Styles.percent}>{answer.percent}%</span>
                </li>
              )}
            </FlipMove>
            <button>Voltar</button>
            {state.isLoading && <Loading />}
            {state.error && <Error error={state.error} reload={() => {}} />}
          </>
        }
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SurveyResult
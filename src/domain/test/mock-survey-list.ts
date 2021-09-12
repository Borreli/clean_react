import { SurveyModel } from '@/domain/models'
import faker from 'faker'

export const mockSurveyListModel = (): SurveyModel[] => ([{
  id: faker.datatype.uuid(),
  question: faker.random.words(10),
  answers: [{
    image: faker.internet.url(),
    answer: faker.random.words(4)
  }, {
    answer: faker.random.words(5)
  }],
  date: faker.date.recent(),
  didAnswer: faker.datatype.boolean()
}])
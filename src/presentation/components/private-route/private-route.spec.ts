import { createMemoryHistory, MemoryHistory } from 'history'
import PrivateRoute from '@/presentation/components/private-route/private-route'
import { mockAccountModel } from '@/domain/test'
import { renderWithHistory } from '@/presentation/test'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  const mockedState = {
    setCurrentAccount: jest.fn(),
    getCurrentAccount: () => account
  }
  renderWithHistory({ history, Page: PrivateRoute, account })
  return { history }
}

describe('PrivateRoute', () => {
  test('Should redirect to /lloign if token is empty', () => {
    const { history } = makeSut(null)
    expect(history.location.pathname).toBe('/login')
  })

  test('Should render current component if token is not empty', () => {
    const { history } = makeSut()
    expect(history.location.pathname).toBe('/')
  })
})

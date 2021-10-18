import { BrowserRouter as Router } from 'react-router-dom'

import { Routes } from './routes'

import GlobalStyle from './styles/global'

export const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
)

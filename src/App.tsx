import { ThemeProvider } from 'styled-components'
import { Container } from './components/Container'
import { Router } from './pages/Router'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />{' '}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './pages/Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CategoriasProvider } from './data/contexts/Produtos'

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CategoriasProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</CategoriasProvider>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App

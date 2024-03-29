import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CookiesProvider } from 'react-cookie'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Color } from './styles'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <ThemeProvider theme={Color}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </CookiesProvider>
    </QueryClientProvider>
  </RecoilRoot>,
)

reportWebVitals()

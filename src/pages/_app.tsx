import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
     <Head>
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
      <ThemeProvider theme={ theme } >
        <Component { ...pageProps } />
        <GlobalStyle />
      </ThemeProvider>
    </>

  )
}

export default MyApp

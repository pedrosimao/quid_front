// import '../styles/globals.css'
import * as React from 'react'
import { Grommet } from 'grommet'
import styled from 'styled-components'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { NearProvider } from 'src/near/nearContext'
import { grommetTheme } from 'src/grommetTheme'
import { store } from 'src/redux/store'

import { Navbar } from '../components/Navbar'

const MainContainer = styled.div`
  padding: 0 2rem;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Grommet theme={grommetTheme} themeMode="dark" full>
        <NearProvider>
          <>
            <Navbar />
            <MainContainer>
              <Component {...pageProps} />
            </MainContainer>
          </>
        </NearProvider>
      </Grommet>
    </Provider>
  )
}

export default MyApp

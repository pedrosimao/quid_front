import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Text, Box } from 'grommet'
import styled from 'styled-components'

const MainContainer = styled.div`
  padding: 0 2rem;
`

const Home: NextPage = () => {
  return (
    <>
      <MainContainer>
        <Head>
          <title>qUid Stable Currency</title>
          <meta name="description" content="qUid Stable Currency" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box
          align="center"
          flex
          justify="center"
          direction="column"
          gap="big"
          height="calc(100vh - 68px)"
        >
          <Image
            src="/images/logo_full.svg"
            alt="qUid Logo"
            width={200}
            // layout="responsive"
            height={200}
          />
          <br />
          <Text
            as="h1"
            textAlign="center"
            size="4xl"
            weight="lighter"
            color="text-weak"
          >
            Stable Coin <br />
            <strong>on Near Protocol</strong>
          </Text>
        </Box>
      </MainContainer>
    </>
  )
}

export default Home

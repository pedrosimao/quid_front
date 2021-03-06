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
          height="calc(100vh - 75px)"
        >
          <Image
            src="/images/logo_full.svg"
            alt="qUid Logo"
            width={200}
            height={200}
          />
          <br />
          <Box width="90%">
            <Image
              src="/images/guns.png"
              alt="Man with guns"
              width={2304}
              height={916}
              objectFit="scale-down"
            />
          </Box>
          <Text
            as="h1"
            textAlign="center"
            size="3xl"
            weight="lighter"
            color="text-weak"
          >
            Stable Coin <br />
            on
            <Image
              src="/images/near_logo.svg"
              alt="Near Protocol Logo"
              width={250}
              height={90}
              objectPosition="15px 20px"
              objectFit="scale-down"
            />
            Protocol
          </Text>
          <br />
        </Box>
      </MainContainer>
    </>
  )
}

export default Home

import * as React from 'react'
import Head from 'next/head'
import { utils } from 'near-api-js'
import { Box, Text, Button, Spinner } from 'grommet'

import { NearContext } from 'src/near/nearContext'
import { useGetNearQuoteQuery } from 'src/redux/api/nearQuote'
import { useGetBalance } from 'src/hooks/useGetBalance'

import { SwapInput } from 'src/components/SwapInput'

const EXCHANGE_RATE = 0.99090909091

const Swap: React.FC = () => {
  const { contract } = React.useContext(NearContext)
  const [swapAmount, setSwapAmount] = React.useState<string | undefined>()
  const [isSwapping, setIsSwapping] = React.useState(false)
  const { quidBalance, nearBalance } = useGetBalance()

  const [isQuid, setIsQuid] = React.useState<boolean>(false)
  const { data: nearQuote } = useGetNearQuoteQuery(undefined, {
    pollingInterval: 60000, // set to 60 seconds
  })

  const swapQuote = isQuid
    ? // Todo: investigate if exchange rate applies to Quid
      (1 / Number(nearQuote)) * EXCHANGE_RATE
    : Number(nearQuote) * EXCHANGE_RATE

  const currentBalance = isQuid ? quidBalance : nearBalance

  const handleSwap = async () => {
    if (swapAmount) {
      try {
        setIsSwapping(true)
        await contract?.swap(
          {
            amount: isQuid
              ? utils.format.parseNearAmount(swapAmount)
              : utils.format.parseNearAmount('0'),
            repay: false,
            short: !isQuid,
          },
          undefined,
          isQuid ? '1' : utils.format.parseNearAmount(swapAmount) || undefined
        )
      } catch (e) {
        // Todo: deal with errors
        console.error(e)
      } finally {
        setIsSwapping(false)
      }
    }
  }

  return (
    <>
      <Head>
        <title>qUid Stable Currency - Swap</title>
        <meta name="description" content="Swap Near for qUid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        alignContent="center"
        width="100%"
        height="91vh"
        align="center"
        flex
        direction="column"
      >
        <Text
          as="h2"
          size="xxlarge"
          margin={{ bottom: 'medium', top: 'large' }}
          textAlign="center"
        >
          Swap <br />
          {'Near <-> qUid'}
        </Text>
        <Box
          width={{ max: '500px', width: '90%' }}
          background="background-front"
          gap="small"
          pad="medium"
          round="small"
          margin="0 auto"
        >
          <Box direction="column">
            <SwapInput
              value={String(swapAmount)}
              maxValue={currentBalance}
              onChange={setSwapAmount}
              swapQuote={swapQuote}
              onChangeCurrency={() => setIsQuid(!isQuid)}
            />
            <br />
            <Button
              primary
              disabled={!swapAmount || isSwapping}
              label="Confirm"
              alignSelf="center"
              size="large"
              icon={isSwapping ? <Spinner /> : undefined}
              style={{
                width: '90%',
                margin: '0 auto',
                textAlign: 'center',
              }}
              onClick={handleSwap}
            />
          </Box>
          {/*  Stats Box */}
          <Box
            background="background-back"
            // animation="slideDown"
            gap="xxsmall"
            pad="medium"
            round="small"
            direction="column"
            margin="large"
          >
            {/*<Text*/}
            {/*  weight="lighter"*/}
            {/*  size="xsmall"*/}
            {/*  alignSelf="end"*/}
            {/*  color="text-weak"*/}
            {/*>*/}
            {/*  {nearQuote && Number(swapAmount)*/}
            {/*    ? `Approximate value: ~${nearQuote.toFixed(2)} usd`*/}
            {/*    : null}*/}
            {/*</Text>*/}
            <Text
              weight="lighter"
              size="xsmall"
              alignSelf="end"
              color="text-weak"
            >
              Price Impact: ~1%
            </Text>
            {/*<Text*/}
            {/*  weight="lighter"*/}
            {/*  size="xsmall"*/}
            {/*  alignSelf="end"*/}
            {/*  color="text-weak"*/}
            {/*>*/}
            {/*  Minimum after slippage: ~$*/}
            {/*  {(Number(nearQuote) * 0.95).toFixed(2)} usd*/}
            {/*</Text>*/}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Swap

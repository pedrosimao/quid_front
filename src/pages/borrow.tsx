import * as React from 'react'
import Head from 'next/head'
import { utils } from 'near-api-js'
import { Box, Text, Button, Spinner, Tabs, Tab } from 'grommet'

import { NearContext } from 'src/near/nearContext'
import { useGetNearQuoteQuery } from 'src/redux/api/nearQuote'
import { useGetBalance } from 'src/hooks/useGetBalance'

import { SwapInput } from 'src/components/SwapInput'

const EXCHANGE_RATE = 0.99090909091

const Borrow: React.FC = () => {
  const { contract } = React.useContext(NearContext)
  const [inputAmount, setInputAmount] = React.useState<string | undefined>()
  const [outputAmount, setOutputAmount] = React.useState<string | undefined>()
  const [inputWithdrawAmount, setInputWithdrawAmount] = React.useState<
    string | undefined
  >()
  const [outputWithdrawAmount, setOutputWithdrawAmount] = React.useState<
    string | undefined
  >()
  const [isWithdraw, setIsWithdraw] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const { quidBalance, nearBalance } = useGetBalance()

  // Todo: borrow short
  // const [isQuid, setIsQuid] = React.useState<boolean>(false)
  const isQuid = false
  const { data: nearQuote } = useGetNearQuoteQuery(undefined, {
    pollingInterval: 60000, // set to 60 seconds
  })

  const swapQuote = isQuid
    ? // Todo: investigate if exchange rate applies to Quid
      (1 / Number(nearQuote)) * EXCHANGE_RATE
    : Number(nearQuote) * EXCHANGE_RATE

  const currentBalance = isQuid ? quidBalance : nearBalance
  const getCollateralRatio = (): number => {
    if (nearQuote && inputAmount && outputAmount) {
      return isQuid
        ? Number(Number(inputAmount) / (Number(outputAmount) * nearQuote))
        : (Number(inputAmount) * nearQuote) / Number(outputAmount)
    }
    return 0
  }

  const getLiquidationPrice = (): number => {
    if (nearQuote && inputAmount && outputAmount) {
      return nearQuote * getCollateralRatio()
    }
    return 0
  }

  const handleBorrow = async () => {
    if (inputAmount && outputAmount) {
      try {
        setIsLoading(true)
        contract?.borrow(
          {
            amount: utils.format.parseNearAmount(outputAmount),
            // Todo: find out how to borrow Near against Quids (borrow short?)
            short: false,
          },
          undefined,
          utils.format.parseNearAmount(inputAmount) || '1'
        )
      } catch (e) {
        // Todo: deal with errors
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleWithdraw = async () => {
    if (inputWithdrawAmount && outputWithdrawAmount) {
      try {
        setIsLoading(true)
        contract?.renege(
          {
            amount: utils.format.parseNearAmount(inputWithdrawAmount),
            sp: false,
            // Todo: find out how to withdraw short
            qd: utils.format.parseNearAmount(outputWithdrawAmount) || false,
            live: true,
          },
          undefined,
          '1'
        )
      } catch (e) {
        // Todo: deal with errors
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <>
      <Head>
        <title>qUid Stable Currency - Borrow</title>
        <meta name="description" content="Borrow Near or qUids" />
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
          Borrow <br />
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
          <Tabs
            justify="center"
            onActive={(i) => {
              if (i === 1) {
                setIsWithdraw(true)
              } else {
                setIsWithdraw(false)
              }
            }}
          >
            <Tab title="Deposit" />
            <Tab title="Withdraw" />
          </Tabs>
          <Box direction="column">
            <SwapInput
              inputLabel={isWithdraw ? 'Withdraw' : 'Deposit'}
              outputLabel={isWithdraw ? 'Repay' : 'Borrow'}
              value={
                isWithdraw ? String(inputWithdrawAmount) : String(inputAmount)
              }
              outputValue={
                isWithdraw ? String(outputWithdrawAmount) : String(outputAmount)
              }
              maxValue={currentBalance}
              onChange={isWithdraw ? setInputWithdrawAmount : setInputAmount}
              onChangeOutput={
                isWithdraw ? setOutputWithdrawAmount : setOutputAmount
              }
              swapQuote={swapQuote}
              // onChangeCurrency={() => setIsQuid(!isQuid)}
              isOutputUnlocked
            />
            <br />
            <Button
              primary
              disabled={
                isWithdraw
                  ? !inputWithdrawAmount || !outputWithdrawAmount || isLoading
                  : !inputAmount || !outputAmount || isLoading
              }
              label="Confirm"
              alignSelf="center"
              size="large"
              icon={isLoading ? <Spinner /> : undefined}
              style={{
                width: '90%',
                margin: '0 auto',
                textAlign: 'center',
              }}
              onClick={isWithdraw ? handleWithdraw : handleBorrow}
            />
          </Box>
          {/*  Stats Box */}
          {isWithdraw ? null : (
            <Box
              background="background-back"
              pad="medium"
              round="small"
              direction="column"
              margin="large"
              flex
            >
              <Text size="xsmall" alignSelf="end" color="text-weak">
                Collateral Ratio: {(getCollateralRatio() * 100).toFixed(2)} %
              </Text>
              <Text
                weight="lighter"
                size="xsmall"
                alignSelf="end"
                color="text-weak"
              >
                Liquidation Price (Near): ~$
                {(getLiquidationPrice() * 0.95).toFixed(2)} usd
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}

export default Borrow

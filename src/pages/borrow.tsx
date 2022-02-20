import * as React from 'react'
import Head from 'next/head'
import { utils } from 'near-api-js'
import { Box, Text, Button, Spinner, Tabs, Tab } from 'grommet'
// @ts-ignore Todo: create a type definition on typings file
import GaugeChart from 'react-gauge-chart'

import { NearContext } from 'src/near/nearContext'
import { useGetNearQuoteQuery } from 'src/redux/api/nearQuote'
import { useGetBalance } from 'src/hooks/useGetBalance'
import { useGetStats } from 'src/hooks/useGetStats'

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
  const { stats } = useGetStats()

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
    if (inputWithdrawAmount || outputWithdrawAmount) {
      try {
        setIsLoading(true)
        // Withdraw
        if (inputWithdrawAmount) {
          contract?.renege(
            {
              amount: utils.format.parseNearAmount(inputWithdrawAmount),
              sp: false,
              // Todo: implement short
              qd: false,
              live: true,
            },
            undefined,
            '1'
          )
        }
        // Repay
        if (outputWithdrawAmount) {
          contract?.swap(
            {
              amount: utils.format.parseNearAmount(outputWithdrawAmount),
              repay: true,
              // Todo: implement short
              short: false,
            },
            undefined,
            '1'
          )
        }
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
          margin={{ bottom: 'medium', top: 'small' }}
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
          <Box
            direction="row"
            justify="center"
            gap="small"
            background="background-back"
            pad="small"
            round="small"
            width="90%"
            margin={'0px auto 10px auto'}
          >
            <Box width="30%">
              <Text size="small" textAlign="center">
                Deposit <br />
                (Near) <br />
                {stats?.credit ? Number(stats?.credit).toFixed(3) : 0}
              </Text>
            </Box>
            <Box width="40%">
              <GaugeChart
                id="gauge-chart2"
                nrOfLevels={22}
                percent={getCollateralRatio() ? 1 / getCollateralRatio() : 0}
                colors={['yellow', '#FFC371', 'red']}
                arcWidth={0.22}
              />
            </Box>
            <Box width="30%" alignContent="center">
              <Text size="small" textAlign="center">
                Debt <br />
                {stats?.debit ? Number(stats?.debit).toFixed(3) : 0}
              </Text>
            </Box>
          </Box>
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
                  ? (!inputWithdrawAmount && !outputWithdrawAmount) || isLoading
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

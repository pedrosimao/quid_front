import * as React from 'react'
import Head from 'next/head'
import { utils } from 'near-api-js'
import { Box, Text, Tabs, Tab, Button } from 'grommet'

import { NearContext } from 'src/near/nearContext'
import { useGetNearQuoteQuery } from 'src/redux/api/nearQuote'
import { useGetBalance } from 'src/hooks/useGetBalance'
import { useGetStats } from 'src/hooks/useGetStats'

import { CryptoInput } from 'src/components/CryptoInput'

const Stake: React.FC = () => {
  const { contract } = React.useContext(NearContext)
  const [depositAmnt, setDepositAmnt] = React.useState<string | undefined>()
  const [withdrawAmnt, setWithdrawAmnt] = React.useState<string | undefined>()
  const [isQuid, setIsQuid] = React.useState<boolean>(false)
  const { data: nearQuote } = useGetNearQuoteQuery(undefined, {
    pollingInterval: 60000, // set to 60 seconds
  })

  const {
    quidBalance,
    nearBalance,
    refetch: refetchQuidBalance,
  } = useGetBalance()

  const { stats, refetch: refetchStats } = useGetStats()

  const currentBalance = isQuid
    ? quidBalance // Todo: find stats
    : nearBalance

  const currentSpBalance = isQuid ? stats?.quidSpStaked : stats?.nearSpStaked

  const refetchAll = () => {
    refetchQuidBalance()
    refetchStats()
  }

  return (
    <>
      <Head>
        <title>qUid Stable Currency - Stake</title>
        <meta name="description" content="Stake qUid Stable Currency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        alignContent="center"
        width="100%"
        height="90vh"
        align="center"
        flex
        direction="column"
      >
        <Text
          // color="brand"
          as="h2"
          size="xxlarge"
          margin={{ bottom: 'medium', top: 'large' }}
        >
          Stake on qUid Solvency Pool
        </Text>
        {/* Deposit and Withdraw Box*/}
        <Box
          width={{ max: '500px', width: '90%' }}
          // height="300px"
          background="background-front"
          // animation="slideDown"
          gap="small"
          pad="medium"
          round="small"
          direction="column"
          margin="0 auto"
        >
          <Tabs justify="center">
            <Tab title="Deposit">
              <br />
              <Box direction="column">
                <CryptoInput
                  value={depositAmnt ? String(depositAmnt) : ''}
                  maxValue={currentBalance}
                  onChange={setDepositAmnt}
                  currencyQuote={nearQuote}
                  onChangeCurrency={() => setIsQuid(!isQuid)}
                />
                <br />
                <Button
                  primary
                  disabled={!depositAmnt}
                  // color="gradient"
                  label="Confirm"
                  alignSelf="center"
                  size="large"
                  style={{
                    width: '90%',
                    margin: '0 auto',
                    textAlign: 'center',
                  }}
                  onClick={async () => {
                    if (depositAmnt) {
                      await contract?.deposit(
                        {
                          qd_amt: isQuid
                            ? utils.format.parseNearAmount(depositAmnt)
                            : '0',
                          live: false,
                        },
                        undefined,
                        isQuid
                          ? '1'
                          : utils.format.parseNearAmount(depositAmnt) ||
                              undefined
                      )
                      refetchAll()
                    }
                  }}
                />
              </Box>
            </Tab>
            <Tab
              title="Withdraw"
              color="linear-gradient(90deg, rgb(50.588% 99.608% 91.373%) 0%, rgb(53.456% 96.078% 91.912%) 6.25%, rgb(56.324% 92.549% 92.451%) 12.5%, rgb(59.191% 89.02% 92.99%) 18.75%, rgb(62.059% 85.49% 93.529%) 25%, rgb(64.926% 81.961% 94.069%) 31.25%, rgb(67.794% 78.431% 94.608%) 37.5%, rgb(70.662% 74.902% 95.147%) 43.75%, rgb(73.529% 71.373% 95.686%) 50%, rgb(76.397% 67.843% 96.225%) 56.25%, rgb(79.265% 64.314% 96.765%) 62.5%, rgb(82.132% 60.784% 97.304%) 68.75%, rgb(85% 57.255% 97.843%) 75%, rgb(87.868% 53.725% 98.382%) 81.25%, rgb(90.735% 50.196% 98.922%) 87.5%, rgb(93.603% 46.667% 99.461%) 93.75%, rgb(96.471% 43.137% 100%) 100% )"
            >
              <br />
              <Box direction="column">
                <CryptoInput
                  maxValue={currentSpBalance}
                  value={withdrawAmnt ? String(withdrawAmnt) : ''}
                  currencyQuote={nearQuote}
                  onChange={setWithdrawAmnt}
                  onChangeCurrency={() => setIsQuid(!isQuid)}
                />
                <br />
                <Button
                  primary
                  disabled={!withdrawAmnt}
                  // color="gradient"
                  label="Confirm"
                  alignSelf="center"
                  size="large"
                  // fill
                  style={{
                    width: '90%',
                    margin: '0 auto',
                    textAlign: 'center',
                  }}
                  onClick={async () => {
                    if (withdrawAmnt) {
                      await contract?.renege(
                        {
                          amount: utils.format.parseNearAmount(withdrawAmnt),
                          sp: true,
                          qd: isQuid,
                        },
                        undefined
                        // utils.format.parseNearAmount('0.00001') || undefined
                      )
                      refetchAll()
                    }
                  }}
                />
              </Box>
            </Tab>
          </Tabs>
        </Box>
        {/*  Stats Box */}
        <Box
          width={{ max: '500px', width: '90%' }}
          background="background-back"
          // animation="slideDown"
          gap="xxsmall"
          pad="medium"
          round="small"
          direction="column"
          margin="large"
        >
          <Box flex direction="row" justify="between" gap="xxsmall">
            <Text as="h2" size="xlarge" margin="xxsmall">
              Near Pool Total
            </Text>
            <Text as="h3" size="medium" weight="lighter" margin="xxsmall">
              {stats?.nearSpTotal}
            </Text>
          </Box>
          <Box flex direction="row" justify="between" gap="xxsmall">
            <Text as="h2" size="xlarge" weight="lighter" margin="xxsmall">
              My Staked Near
            </Text>
            <Text as="h3" size="medium" weight="lighter" margin="xxsmall">
              {stats?.nearSpStaked}
            </Text>
          </Box>
          <Box flex direction="row" justify="between" gap="xxsmall">
            <Text as="h2" size="xlarge" margin="xxsmall">
              qUid Pool Total
            </Text>
            <Text as="h3" size="medium" weight="lighter" margin="xxsmall">
              {stats?.quidSpTotal}
            </Text>
          </Box>
          <Box flex direction="row" justify="between" gap="xxsmall">
            <Text as="h2" size="xlarge" weight="lighter" margin="xxsmall">
              My Staked Quid
            </Text>
            <Text as="h3" size="medium" weight="lighter" margin="xxsmall">
              {stats?.quidSpStaked}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Stake

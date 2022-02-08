import * as React from 'react'
import Head from 'next/head'
import { utils } from 'near-api-js'
import { Box, Text, Tabs, Tab, TextInput, Button } from 'grommet'

import { NearContext } from 'src/near/nearContext'
import { PledgeType, PoolStatsType } from 'src/near/types'

const Stake: React.FC = () => {
  const { contract, currentUser } = React.useContext(NearContext)
  const [depositAmnt, setDepositAmnt] = React.useState<string | null>(null)
  const [withdrawAmnt, setWithdrawAmnt] = React.useState<string | null>(null)
  const [pledged, setPledged] = React.useState<PledgeType | undefined>()
  const [stats, setStats] = React.useState<PoolStatsType | undefined>()

  const getNewPledgedAmnt = async () => {
    const newPledges = await contract?.get_pledge({
      account: currentUser?.accountId,
    })
    setPledged(newPledges)
  }
  const getStats = async () => {
    const newStats = await contract?.get_pool_stats({})
    setStats(newStats)
  }

  React.useEffect(() => {
    getNewPledgedAmnt()
    getStats()
  }, [contract])

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
                <Box
                  border={{ size: 'xsmall' }}
                  width="90%"
                  flex
                  direction="column"
                  round="small"
                  pad="small"
                  // background="gradient-background"
                  background="background-back"
                  margin="0 auto"
                >
                  <TextInput
                    plain={true}
                    focusIndicator={false}
                    type="number"
                    name="deposit"
                    step="0.1"
                    placeholder="0.000"
                    size="xxlarge"
                    textAlign="end"
                    min={0}
                    value={String(depositAmnt)}
                    onChange={(e) => {
                      setDepositAmnt(e?.target?.value)
                    }}
                  />
                  <Text alignSelf="end" margin="0 10px 0 0">
                    Near
                  </Text>
                </Box>
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
                      contract?.deposit(
                        {
                          qd_amt: '0',
                          live: false,
                        },
                        '300000000000000',
                        utils.format.parseNearAmount(depositAmnt) || undefined
                      )
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
                <Box
                  border={{ size: 'xsmall' }}
                  width="90%"
                  flex
                  direction="column"
                  round="small"
                  pad="small"
                  // background="gradient-background"
                  background="background-back"
                  margin="0 auto"
                >
                  <TextInput
                    plain={true}
                    focusIndicator={false}
                    type="number"
                    name="withdraw"
                    step="0.1"
                    placeholder="0.000"
                    size="xxlarge"
                    textAlign="end"
                    min={0}
                    value={String(withdrawAmnt)}
                    onChange={(e) => {
                      setWithdrawAmnt(e?.target?.value)
                    }}
                  />
                  <Text alignSelf="end" margin="0 10px 0 0">
                    Near
                  </Text>
                </Box>
                <br />
                <Button
                  primary
                  disabled={!withdrawAmnt}
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
                    if (withdrawAmnt) {
                      contract?.renege(
                        {
                          amount: utils.format.parseNearAmount(withdrawAmnt),
                          sp: true,
                          qd: false,
                        },
                        '300000000000000'
                        // utils.format.parseNearAmount('0.00001') || undefined
                      )
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
          background="gradient"
          // animation="slideDown"
          gap="small"
          pad="medium"
          round="small"
          direction="column"
          margin="large"
        >
          <Box flex direction="row" justify="between" gap="xsmall">
            <Text as="h2" size="xlarge">
              Total Stake
            </Text>
            <Text as="h3" size="medium" weight="lighter">
              {utils.format.formatNearAmount(stats?.blood_debit || '0')}
            </Text>
          </Box>
          <Box flex direction="row" justify="between">
            <Text as="h2" size="xlarge" weight="lighter">
              My Staked
            </Text>
            <Text as="h3" size="medium" weight="lighter">
              {utils.format.formatNearAmount(pledged?.near_sp || '0')}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Stake

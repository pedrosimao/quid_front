import * as React from 'react'
import Head from 'next/head'
import { Box, Text, Tabs, Tab } from 'grommet'

const Stake: React.FC = () => {
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
          Lend your Nears or qUids
        </Text>
        <Box
          width="600px"
          height="300px"
          background={{ color: 'background-back' }}
          border
          animation="slideDown"
          gap="small"
          pad="small"
          round="medium"
        >
          <Tabs>
            <Tab title="Deposit">
              <Box pad="medium">Coming soon...</Box>
            </Tab>
            <Tab
              title="Withdraw"
              color="linear-gradient(90deg, rgb(50.588% 99.608% 91.373%) 0%, rgb(53.456% 96.078% 91.912%) 6.25%, rgb(56.324% 92.549% 92.451%) 12.5%, rgb(59.191% 89.02% 92.99%) 18.75%, rgb(62.059% 85.49% 93.529%) 25%, rgb(64.926% 81.961% 94.069%) 31.25%, rgb(67.794% 78.431% 94.608%) 37.5%, rgb(70.662% 74.902% 95.147%) 43.75%, rgb(73.529% 71.373% 95.686%) 50%, rgb(76.397% 67.843% 96.225%) 56.25%, rgb(79.265% 64.314% 96.765%) 62.5%, rgb(82.132% 60.784% 97.304%) 68.75%, rgb(85% 57.255% 97.843%) 75%, rgb(87.868% 53.725% 98.382%) 81.25%, rgb(90.735% 50.196% 98.922%) 87.5%, rgb(93.603% 46.667% 99.461%) 93.75%, rgb(96.471% 43.137% 100%) 100% )"
            >
              <Box pad="medium">Coming soon...</Box>
            </Tab>
          </Tabs>
        </Box>
      </Box>
    </>
  )
}

export default Stake

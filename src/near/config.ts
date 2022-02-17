export const CONTRACT_NAME =
  process.env.CONTRACT_NAME || 'dev-1645134464429-38710865502300'

export enum NETWORK_TYPE {
  PRODUCTION = 'production',
  DEV = 'development',
  TEST = 'test',
  TESTNET = 'testnet',
}
export const getConfig = (env: string) => {
  switch (env) {
    case NETWORK_TYPE.PRODUCTION:
      return {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
        explorerUrl: 'https://explorer.mainnet.near.org',
      }
    // This is an example app so production is set to testnet.
    // You can move production to mainnet if that is applicable.
    // case NETWORK_TYPE.PRODUCTION:
    case NETWORK_TYPE.DEV:
    case NETWORK_TYPE.TESTNET:
      return {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org',
      }
    default:
      throw Error(
        `Unconfigured environment '${env}'. Can be configured in src/config.js.`
      )
  }
}

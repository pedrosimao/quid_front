import * as nearAPI from 'near-api-js'
import { getConfig } from './config'

interface ContractType extends nearAPI.Contract {
  deposit: (
    { amount: string, live: boolean }: Record<string, unknown>,
    gas?: string,
    deposit?: string
  ) => void
  borrow: (
    { amount: string, short: boolean }: Record<string, unknown>,
    gas?: string,
    deposit?: string
  ) => void
  new: (
    { owner_id: string }: Record<string, unknown>,
    gas?: string,
    deposit?: string
  ) => void
  /*
   * This function exists to allow withdraw of deposits, either from
   * a user's SolvencyPool deposit, or LivePool (borrowing) position
   * Hence, the first boolean parameter (for indicating which pool),
   * last boolean parameter indicates the currency being withdrawn.
   */
  renege: (
    // @ts-ignore Todo: find a solution for this weird duplicate alert
    { amount: string, sp: boolean, qd: boolean }: Record<string, unknown>,
    gas?: string,
    deposit?: string
  ) => void
  /*
   * Close out caller's borrowing position by paying
   * off all pledge's own debt with own collateral
   */
  fold: (
    { short: boolean }: Record<string, unknown>,
    gas?: string,
    deposit?: string
  ) => void
  /*
   * Call this function to attempt liquidating a single Pledge
   */
  clip: (
    { account: string }: Record<string, unknown>,
    gas?: string,
    deposit?: string
  ) => void
}

export interface NearContextType {
  contract: ContractType | null
  walletConnection: nearAPI.WalletConnection | null
  currentUser?: {
    accountId: string
    balance: string
    isSignedIn: boolean
  } | null
  nearConfig: {
    networkId: string
    nodeUrl: string
    contractName: string
    walletUrl: string
    helperUrl: string
  } | null
}

// Initializing contract
export const initContract = async (): Promise<NearContextType> => {
  const nearConfig = getConfig(process.env.NODE_ENV || 'testnet')

  // Initializing connection to the NEAR TestNet
  const near = await nearAPI.connect({
    ...nearConfig,
    headers: {},
    keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
  })

  // Needed to access wallet
  // const wallet: WalletConnection = await new WalletConnection(near, `quid`);
  const walletConnection = await new nearAPI.WalletConnection(near, 'quid')

  // Load in account data
  let currentUser
  if (walletConnection.getAccountId()) {
    currentUser = {
      accountId: walletConnection.getAccountId(),
      balance: (await walletConnection.account().state()).amount,
      isSignedIn: walletConnection.isSignedIn(),
    }
  }

  // Initializing our contract APIs by contract name and configuration
  const contract = await new nearAPI.Contract(
    walletConnection.account(),
    nearConfig.contractName,
    {
      // View methods are read-only – they don't modify the state, but usually return some value
      viewMethods: ['get_pledge'],
      // Change methods can modify the state, but you don't receive the returned value when called
      changeMethods: ['renege', 'borrow', 'deposit', 'fold', 'clip', 'new'],
      // Sender is the account ID to initialize transactions.
      // getAccountId() will return empty string if user is still unauthorized
      // Todo: check if sender is needed
      // sender: walletConnection.getAccountId(),
    }
  )
  // @ts-ignore - Todo: verify whats the problem with Contract ts type
  return { contract, currentUser, nearConfig, walletConnection }
}

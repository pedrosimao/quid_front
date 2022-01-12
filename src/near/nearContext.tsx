// connect to NEAR
import React, { createContext, useState, useEffect } from 'react'

import { initContract } from './initContract'
// import { CONTRACT_NAME } from 'src/near/config'
import { NearContextType } from './initContract'

// import { connect, keyStores, WalletConnection, Contract } from 'near-api-js'
// import { getConfig } from './config'

export const NearContext = createContext<NearContextType>({
  contract: null,
  currentUser: null,
  walletConnection: null,
  nearConfig: null,
})

export const NearProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [nearState, setNearState] = useState<NearContextType>({
    contract: null,
    currentUser: null,
    walletConnection: null,
    nearConfig: null,
  })

  useEffect(() => {
    const initNear = async () => {
      const { contract, currentUser, walletConnection, nearConfig } =
        await initContract()
      // const nearConfig = getConfig(process.env.NODE_ENV || 'testnet')
      //
      // // connect to NEAR
      // const updatedConfig = {
      //   ...nearConfig,
      //   keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      //   headers: {},
      // }
      // const near = await connect(updatedConfig)
      //
      // const wallet: WalletConnection = await new WalletConnection(near, `quid`)
      //
      // const account = await wallet.account()
      //
      // const contract = await new Contract(account, updatedConfig.contractName, {
      //   viewMethods: ['get_greeting'],
      //   changeMethods: ['set_greeting'],
      // })

      setNearState({ contract, currentUser, walletConnection, nearConfig })
    }
    initNear()
  }, [])

  return (
    <NearContext.Provider key={'NearContext'} value={nearState}>
      {children}
    </NearContext.Provider>
  )
}

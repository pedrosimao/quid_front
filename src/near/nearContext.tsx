import React, { createContext, useState, useEffect } from 'react'

import { initContract } from './initContract'
import { NearContextType } from './initContract'

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

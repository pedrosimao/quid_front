import { useState, useEffect, useContext } from 'react'
import { utils } from 'near-api-js'

import { NearContext } from 'src/near/nearContext'

// Todo: replace by redux-toolkit query
export const useGetBalance = (): {
  quidBalance: string
  nearBalance: string
  isLoading: boolean
  refetch: () => void
} => {
  const { contract, currentUser, walletConnection } = useContext(NearContext)
  const [quidBalance, setQuidBalance] = useState<string>('')
  const [nearBalance, setNearBalance] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchQuidBalance = async () => {
    try {
      setIsLoading(true)
      // Get qUid balance
      const quidRes = await walletConnection
        ?.account()
        .viewFunction(contract?.contractId || '', 'ft_balance_of', {
          account_id: currentUser?.accountId,
        })
      const newQuidBalance = utils.format.formatNearAmount(quidRes)
      setQuidBalance(Number(newQuidBalance).toFixed(3))
      // Get Near balance
      const newNearBalance = utils.format.formatNearAmount(
        currentUser?.balance || '0'
      )
      setNearBalance(Number(newNearBalance).toFixed(3))
    } catch (e) {
      // Todo: add a toaster warning of errors
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchQuidBalance()
  }, [contract])

  return {
    quidBalance,
    nearBalance,
    isLoading,
    refetch: fetchQuidBalance,
  }
}

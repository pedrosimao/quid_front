import { useState, useEffect, useContext } from 'react'
import { utils } from 'near-api-js'

import { NearContext } from 'src/near/nearContext'

export interface StatsType {
  nearSpTotal: string
  quidSpTotal: string
  nearSpStaked: string
  quidSpStaked: string
}
// Todo: replace by redux-toolkit query
export const useGetStats = (): {
  stats: StatsType | null
  isLoading: boolean
  refetch: () => void
} => {
  const { contract, currentUser } = useContext(NearContext)
  const [stats, setStats] = useState<StatsType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getPledged = async () => {
    return contract?.get_pledge({
      account: currentUser?.accountId,
    })
  }
  const getStats = async () => {
    return contract?.get_pool_stats({})
  }

  const fetchStats = async () => {
    try {
      setIsLoading(true)
      const newStats = await getStats()
      const newPledged = await getPledged()
      setStats({
        nearSpTotal: utils.format.formatNearAmount(
          newStats?.blood_debit || '0'
        ),
        quidSpTotal: utils.format.formatNearAmount(
          newStats?.blood_credit || '0'
        ),
        nearSpStaked: utils.format.formatNearAmount(newPledged?.near_sp || '0'),
        quidSpStaked: utils.format.formatNearAmount(newPledged?.quid_sp || '0'),
      })
    } catch (e) {
      // Todo: add a toaster warning of errors
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [contract])

  return {
    stats,
    isLoading,
    refetch: fetchStats,
  }
}

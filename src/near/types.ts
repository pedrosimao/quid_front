import * as nearAPI from 'near-api-js'

export interface PledgeType {
  debit: string
  s_debit: string
  credit: string
  s_credit: string
  quid_sp: string
  near_sp: string
}

export interface PoolStatsType {
  blood_credit: string
  blood_debit: string
  froze_long_credit: string
  froze_long_debit: string
  froze_short_credit: string
  froze_short_debit: string
  live_short_credit: string
  live_short_debit: string
  live_long_credit: string
  live_long_debit: string
  dead_short_credit: string
  dead_short_debit: string
  dead_long_credit: string
  dead_long_debit: string
}

export interface ContractType extends nearAPI.Contract {
  /*
   * Change Methods
   */
  deposit: (
    // Live to false means depositing on Solvency Pool and true means you can borrow against the collateral
    { qd_amt: string, live: boolean }: Record<string, unknown>,
    gas?: string,
    deposit?: string
  ) => void
  borrow: (
    { amount: string, short: boolean }: Record<string, unknown>,
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
  // clip: (
  //   { account: string }: Record<string, unknown>,
  //   gas?: string,
  //   deposit?: string
  // ) => void
  /*
   * View Methods
   */
  // Get Pledge for one Account
  get_pledge: (
    { account: string }: Record<string, unknown>,
    gas?: string,
    deposit?: string
  ) => Promise<PledgeType>
  // Get Pool Stats
  get_pool_stats: (
    {}: Record<string, unknown>,
    gas?: string,
    deposit?: string
  ) => Promise<PoolStatsType>
}

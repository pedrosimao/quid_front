export interface SwapInputPropsType {
  value?: string
  outputValue?: string
  onChange: (value: string) => void
  onChangeOutput?: (value: string) => void
  onChangeCurrency?: (e: string) => void
  maxValue?: string
  swapQuote?: number
  inputLabel?: string
  outputLabel?: string
  isOutputUnlocked?: boolean
}

export enum CurrencyTypeEnum {
  NEAR = 'NEAR',
  QUID = 'QUID',
}

export interface SwapInputPropsType {
  value?: string
  onChange: (value: string) => void
  onChangeCurrency?: (e: string) => void
  maxValue?: string
  swapQuote?: number
}

export enum CurrencyTypeEnum {
  NEAR = 'Near',
  QUID = 'qUid',
}

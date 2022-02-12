export interface CryptoInputPropsType {
  value?: string
  onChange: (value: string) => void
  onChangeCurrency?: (e: string) => void
  maxValue?: string
  currencyQuote?: number
}

export enum CurrencyTypeEnum {
  NEAR = 'Near',
  QUID = 'qUid',
}

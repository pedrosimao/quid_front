export interface CryptoInputPropsType {
  value: string
  onChange: (value: string) => void
  onChangeCurrency?: (e: string) => void
  maxValue?: string
}

export enum CurrencyTypeEnum {
  NEAR = 'Near',
  QUID = 'qUid',
}

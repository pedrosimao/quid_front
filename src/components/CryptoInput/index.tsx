import * as React from 'react'
import Image from 'next/image'
import { Box, Text, TextInput, Button } from 'grommet'

import * as t from './types'

export const CryptoInput: React.FC<t.CryptoInputPropsType> = ({
  value,
  maxValue,
  currencyQuote,
  onChange,
  onChangeCurrency,
  showBalance = true,
}) => {
  const [currency, setCurrency] = React.useState<t.CurrencyTypeEnum>(
    t.CurrencyTypeEnum.NEAR
  )
  const [fiatValue, setFiatValue] = React.useState<number>(0)
  const isNear = currency === t.CurrencyTypeEnum.NEAR

  const updateFiatValues = () => {
    if (currencyQuote && value) {
      const newFiatValue = isNear ? currencyQuote : 1
      const newTotalFiatValue = newFiatValue * Number(value)
      setFiatValue(newTotalFiatValue)
    }
  }

  // Todo: make a redux value for it, updated every X minutes
  React.useEffect(() => {
    if (value && currencyQuote) {
      updateFiatValues()
    }
  }, [value, currencyQuote, isNear])

  return (
    <>
      {showBalance ? (
        <Box
          flex
          width="90%"
          gap="small"
          pad="none"
          align="center"
          justify="end"
          direction="row"
          margin="0 auto"
        >
          <Text as="p" size="small" margin="0">
            balance: {Number(maxValue || 0).toFixed(3)}
          </Text>
          {maxValue ? (
            <Button
              label="max"
              alignSelf="end"
              size="small"
              onClick={() => {
                onChange(maxValue)
              }}
            />
          ) : null}
        </Box>
      ) : null}
      <Box
        margin="5px auto 0 auto"
        border={{ size: 'xsmall' }}
        width="90%"
        flex
        direction="column"
        round="small"
        pad="small"
        background="background-back"
      >
        <Box width="100%" flex direction="row">
          <TextInput
            plain={true}
            focusIndicator={false}
            type="number"
            name="withdraw"
            step="0.1"
            placeholder="0.000"
            size="xxlarge"
            textAlign="start"
            min={0}
            value={value}
            onChange={(e) => {
              onChange(e?.target?.value)
            }}
          />
          <Button
            primary
            alignSelf="end"
            margin="auto 0"
            label={currency}
            color="background-front"
            size="small"
            icon={
              <Image
                src={
                  currency === t.CurrencyTypeEnum.NEAR
                    ? '/images/near_icon.svg'
                    : '/images/logo_small.svg'
                }
                alt="Currency Icon"
                height={66}
                width={66}
                objectFit="scale-down"
              />
            }
            onClick={() => {
              const newCurrency =
                currency === t.CurrencyTypeEnum.NEAR
                  ? t.CurrencyTypeEnum.QUID
                  : t.CurrencyTypeEnum.NEAR
              setCurrency(newCurrency)
              onChangeCurrency && onChangeCurrency(newCurrency)
            }}
          />
        </Box>
        <Box width="100%" flex direction="row">
          <Box width="100%">
            <Text
              weight="lighter"
              size="xsmall"
              alignSelf="start"
              color="text-weak"
              style={{ marginLeft: 10, width: '100%', minHeight: 24 }}
            >
              {fiatValue && Number(value)
                ? ` ~${fiatValue.toFixed(2)} usd`
                : null}
            </Text>
          </Box>
          <div />
        </Box>
      </Box>
    </>
  )
}

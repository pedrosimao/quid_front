import * as React from 'react'
import { Box, Text, TextInput, Button } from 'grommet'

import { fetchFiatValue } from 'src/components/CryptoInput/utils'
import * as t from './types'

export const CryptoInput: React.FC<t.CryptoInputPropsType> = ({
  value,
  maxValue,
  onChange,
  onChangeCurrency,
}) => {
  const [currency, setCurrency] = React.useState<t.CurrencyTypeEnum>(
    t.CurrencyTypeEnum.NEAR
  )
  const [fiatValue, setFiatValue] = React.useState<number>(0)
  const isNear = currency === t.CurrencyTypeEnum.NEAR

  const updateFiatValues = async () => {
    const newFiatValue = isNear ? await fetchFiatValue() : 1
    const newTotalFiatValue = newFiatValue * Number(value)
    setFiatValue(newTotalFiatValue)
  }

  // Todo: make a redux value for it, updated every X minutes
  React.useEffect(() => {
    if (value) {
      updateFiatValues()
    }
  }, [value, isNear])
  return (
    <>
      {maxValue ? (
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
          <Text as="p" size="xsmall" margin="0">
            balance: {Number(maxValue || 0).toFixed(3)}
          </Text>
          <Button
            // primary
            label="max"
            alignSelf="end"
            // margin="auto 10px auto 0"
            // color="gradient"
            size="small"
            // gap="xsmall"
            onClick={() => {
              onChange(maxValue)
            }}
          />
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
        // background="gradient-background"
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
            // size="small"
            plain={false}
            alignSelf="end"
            margin="auto 0"
            // size="small"
            // style={{ cursor: 'pointer' }}
            label={currency}
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
              {fiatValue ? ` ~${fiatValue.toFixed(2)} usd` : null}
            </Text>
          </Box>
          <div />
        </Box>
      </Box>
    </>
  )
}

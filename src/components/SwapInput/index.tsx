import * as React from 'react'
import { Box, Button, Text, TextInput } from 'grommet'

import * as t from './types'

export const SwapInput: React.FC<t.SwapInputPropsType> = ({
  value,
  maxValue,
  swapQuote,
  onChange,
  onChangeCurrency,
}) => {
  const [currency, setCurrency] = React.useState<t.CurrencyTypeEnum>(
    t.CurrencyTypeEnum.NEAR
  )
  const handleChangeCurrency = () => {
    const newCurrency =
      currency === t.CurrencyTypeEnum.NEAR
        ? t.CurrencyTypeEnum.QUID
        : t.CurrencyTypeEnum.NEAR
    setCurrency(newCurrency)
    onChangeCurrency && onChangeCurrency(newCurrency)
  }

  return (
    <Box flex align="center" direction="column">
      {maxValue ? (
        <Box
          width="90%"
          gap="small"
          pad="none"
          align="center"
          justify="between"
          direction="row"
          margin="0 auto"
        >
          <Text alignSelf="start">Pay:</Text>
          <Box flex justify="end" align="center" direction="row" gap="xsmall">
            <Text as="p" size="xsmall" margin="0" alignSelf="center">
              balance: {Number(maxValue || 0).toFixed(3)}
            </Text>
            <Button
              label="max"
              alignSelf="end"
              size="small"
              onClick={() => {
                onChange(maxValue)
              }}
            />
          </Box>
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
            value={value ? value : ''}
            onChange={(e) => {
              onChange(e?.target?.value)
            }}
          />
          <Button
            primary
            plain={false}
            alignSelf="end"
            margin="auto 0"
            label={currency}
            onClick={handleChangeCurrency}
          />
        </Box>
      </Box>
      <Box
        width="90%"
        margin="20px auto 0 auto"
        gap="small"
        pad="none"
        align="center"
        justify="between"
        direction="row"
      >
        <Text alignSelf="start">Receive: (approximately)</Text>
      </Box>
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
            value={swapQuote && value ? String(Number(value) * swapQuote) : ''}
            onChange={(e) => {
              onChange(String(Number(e?.target?.value) / (swapQuote || 1)))
            }}
          />
          <Button
            primary
            plain={false}
            alignSelf="end"
            margin="auto 0"
            // size="small"
            // style={{ cursor: 'pointer' }}
            label={
              currency === t.CurrencyTypeEnum.NEAR
                ? t.CurrencyTypeEnum.QUID
                : t.CurrencyTypeEnum.NEAR
            }
            onClick={handleChangeCurrency}
          />
        </Box>
      </Box>
      {/* Todo: display some info about the swap transaction */}
      {/*<Box width="90%" justify="end">*/}
      {/*  <Text weight="lighter" size="xsmall" alignSelf="end" color="text-weak">*/}
      {/*    {fiatValue && Number(value)*/}
      {/*      ? `Approximate value: ~${fiatValue.toFixed(2)} usd`*/}
      {/*      : null}*/}
      {/*  </Text>*/}
      {/*  <Text weight="lighter" size="xsmall" alignSelf="end" color="text-weak">*/}
      {/*    Price Impact: ~1%*/}
      {/*  </Text>*/}
      {/*  <Text weight="lighter" size="xsmall" alignSelf="end" color="text-weak">*/}
      {/*    Max slippage: ~1%*/}
      {/*  </Text>*/}
      {/*  <Text weight="lighter" size="xsmall" alignSelf="end" color="text-weak">*/}
      {/*    Minimum received after slippage: ~${(fiatValue * 0.95).toFixed(2)} usd*/}
      {/*  </Text>*/}
      {/*</Box>*/}
    </Box>
  )
}

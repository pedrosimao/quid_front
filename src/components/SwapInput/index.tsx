import * as React from 'react'
import Image from 'next/image'
import { Box, Button, Text, TextInput } from 'grommet'

import * as t from './types'

export const SwapInput: React.FC<t.SwapInputPropsType> = ({
  value,
  outputValue,
  maxValue,
  swapQuote,
  onChange,
  onChangeOutput,
  onChangeCurrency,
  inputLabel,
  outputLabel,
  isOutputUnlocked = false,
}) => {
  const [currency, setCurrency] = React.useState<t.CurrencyTypeEnum>(
    t.CurrencyTypeEnum.NEAR
  )
  const handleChangeCurrency = () => {
    if (!onChangeCurrency) return
    const newCurrency =
      currency === t.CurrencyTypeEnum.NEAR
        ? t.CurrencyTypeEnum.QUID
        : t.CurrencyTypeEnum.NEAR
    setCurrency(newCurrency)
    onChangeCurrency && onChangeCurrency(newCurrency)
  }

  const getOutputValue = () => {
    if (isOutputUnlocked) return outputValue ? outputValue : ''
    return swapQuote && value ? String(Number(value) * swapQuote) : ''
  }

  const handleOutputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isOutputUnlocked) {
      onChangeOutput && onChangeOutput(e?.target?.value)
      return
    }
    onChange(String(Number(e?.target?.value) / (swapQuote || 1)))
  }

  return (
    <Box flex align="center" direction="column">
      <Box
        width="90%"
        gap="small"
        pad="none"
        align="center"
        justify="between"
        direction="row"
        margin="0 auto"
      >
        <Text alignSelf="start">{inputLabel ? inputLabel : 'Pay:'}</Text>
        <Box flex justify="end" align="center" direction="row" gap="xsmall">
          <Text as="p" size="xsmall" margin="0" alignSelf="center">
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
            value={value ? value : ''}
            onChange={(e) => {
              onChange(e?.target?.value)
            }}
          />
          <Button
            primary
            size="small"
            icon={
              <Image
                alt="currency icon"
                src={
                  currency === t.CurrencyTypeEnum.NEAR
                    ? '/images/near_icon.svg'
                    : '/images/logo_small.svg'
                }
                height={66}
                width={66}
                objectFit="scale-down"
              />
            }
            plain={false}
            alignSelf="end"
            margin="auto 0"
            label={currency}
            onClick={handleChangeCurrency}
            color="background-front"
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
        <Text alignSelf="start">
          {outputLabel ? outputLabel : 'Receive: (approximately)'}
        </Text>
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
            value={getOutputValue()}
            onChange={handleOutputChange}
          />
          <Button
            primary
            size="small"
            plain={false}
            alignSelf="end"
            margin="auto 0"
            color="background-front"
            icon={
              <Image
                alt="currency icon"
                src={
                  currency === t.CurrencyTypeEnum.NEAR
                    ? '/images/logo_small.svg'
                    : '/images/near_icon.svg'
                }
                height={66}
                width={66}
                objectFit="scale-down"
              />
            }
            label={
              currency === t.CurrencyTypeEnum.NEAR
                ? t.CurrencyTypeEnum.QUID
                : t.CurrencyTypeEnum.NEAR
            }
            onClick={handleChangeCurrency}
          />
        </Box>
      </Box>
    </Box>
  )
}

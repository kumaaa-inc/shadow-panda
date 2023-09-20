import type { PropertyTransform } from '@pandacss/types'

export const colorMix: (...args: Parameters<PropertyTransform>) => {
  color: string
  amount: string | number
  value: string
} = (value: string, { token }) => {
  const [color, opacityAmount] = value.split('/')
  const amount = !isNaN(Number(opacityAmount)) ? Number(opacityAmount) : 100
  const colorValue = token(`colors.${color}`)
  const opacityValue = token(`opacity.${amount}`)
  const amountValue = opacityValue ? Number(opacityValue) * 100 : `${100 - amount}%`

  return {
    color: colorValue ?? color,
    amount: amountValue,
    value: `color-mix(in srgb, transparent ${amountValue}, ${colorValue})`,
  }
}

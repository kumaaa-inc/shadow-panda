import type { PropertyTransform } from '@pandacss/types'

export const colorMix: (...args: Parameters<PropertyTransform>) => {
  color: string
  amount: string | number
  value: string
} = (value: string, { token }) => {
  const [color, opacityAmount] = value.split('/')
  const amount = !isNaN(Number(opacityAmount)) ? Number(opacityAmount) : 100
  const colorValue = token(`colors.${color}`)
  const amountValue = token(`opacity.${amount}`)
    ? token(`opacity.${amount}`) * 100
    : `${100 - amount}%`

  return {
    color: colorValue,
    amount: amountValue,
    value: `color-mix(in srgb, transparent ${amountValue}, ${colorValue})`,
  }
}

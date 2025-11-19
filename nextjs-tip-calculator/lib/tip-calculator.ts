/**
 * Tip calculation logic with TypeScript types
 * This demonstrates .ts files with proper typing
 */

export interface TipCalculation {
  billAmount: number
  tipPercentage: number
  numberOfPeople: number
  tipAmount: number
  totalAmount: number
  amountPerPerson: number
}

export interface CalculateTipParams {
  billAmount: number
  tipPercentage: number
  numberOfPeople: number
}

/**
 * Calculate tip and total amounts
 */
export function calculateTip(params: CalculateTipParams): TipCalculation {
  const { billAmount, tipPercentage, numberOfPeople } = params

  // Validate inputs
  if (billAmount < 0 || tipPercentage < 0 || numberOfPeople < 1) {
    throw new Error("Invalid input values")
  }

  const tipAmount = (billAmount * tipPercentage) / 100
  const totalAmount = billAmount + tipAmount
  const amountPerPerson = totalAmount / numberOfPeople

  return {
    billAmount,
    tipPercentage,
    numberOfPeople,
    tipAmount,
    totalAmount,
    amountPerPerson,
  }
}

/**
 * Predefined tip percentages
 */
export const TIP_PRESETS = [10, 15, 18, 20, 25] as const

export type TipPreset = (typeof TIP_PRESETS)[number]

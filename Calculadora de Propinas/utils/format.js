/**
 * Utility functions for formatting (Pure JavaScript)
 * This demonstrates .js files working alongside TypeScript
 */

/**
 * Format a number as currency
 * @param {number} amount - The amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currency,
  }).format(amount)
}

/**
 * Format a number as percentage
 * @param {number} value - The value to format
 * @returns {string} Formatted percentage string
 */
export function formatPercentage(value) {
  return `${value}%`
}

/**
 * Round to 2 decimal places
 * @param {number} num - Number to round
 * @returns {number} Rounded number
 */
export function roundToTwo(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

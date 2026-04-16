const GBP_FORMATTER = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 2,
})

export function formatCurrency(amount: number): string {
  return GBP_FORMATTER.format(amount)
}

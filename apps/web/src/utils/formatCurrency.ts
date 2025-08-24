export function formatCurrency(value: number, locale = 'pt-PT', currency = 'BRL') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}
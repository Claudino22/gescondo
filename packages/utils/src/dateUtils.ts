export function formatDate(date: Date, locale = 'pt-PT') {
  return date.toLocaleDateString(locale);
}

export function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
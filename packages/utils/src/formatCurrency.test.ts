import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formata valor em BRL', () => {
    expect(formatCurrency(1234.56)).toBe('R$ 1.234,56');
  });

  it('formata valor em USD', () => {
    expect(formatCurrency(100, 'en-US', 'USD')).toBe('$100.00');
  });
});
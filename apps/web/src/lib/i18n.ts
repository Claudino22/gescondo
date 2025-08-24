export const messages = {
  'pt-PT': {
    welcome: 'Bem-vindo ao GESCONDO',
    dashboard: 'Dashboard',
    reservas: 'Reservas',
    tickets: 'Tickets',
    financeiro: 'Financeiro',
    assembleias: 'Assembleias',
    portaria: 'Portaria',
    configuracoes: 'Configurações'
  },
  'en-US': {
    welcome: 'Welcome to GESCONDO',
    dashboard: 'Dashboard',
    reservas: 'Bookings',
    tickets: 'Tickets',
    financeiro: 'Finance',
    assembleias: 'Meetings',
    portaria: 'Gatehouse',
    configuracoes: 'Settings'
  }
};

export function t(key: string, locale = 'pt-PT') {
  return messages[locale][key] || key;
}
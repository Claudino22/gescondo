export type UserRole = 'morador' | 'síndico' | 'porteiro' | 'administrador' | 'financeiro' | 'visitante';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}
import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  // Exemplo: autenticação mock
  function signin(email: string, password: string) {
    setUser({ name: 'Usuário', role: 'morador' });
  }

  function signout() {
    setUser(null);
  }

  return { user, signin, signout };
}
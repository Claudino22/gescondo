# GESCONDO

Monorepo para Sistema de Gestão de Condomínios.

## Estrutura

- `apps/web`: Frontend Next.js
- `apps/api`: Backend NestJS
- `packages/ui`: Componentes compartilhados
- `packages/config`: Configurações compartilhadas
- `packages/utils`: Funções utilitárias

## Setup Local

1. Instale o [pnpm](https://pnpm.io/) e [Docker](https://www.docker.com/).
2. Instale dependências:
   ```sh
   pnpm i
   ```
3. Suba os serviços:
   ```sh
   docker compose up -d
   ```
4. Configure o `.env` copiando de `.env.example`.
5. Migre e popule o banco:
   ```sh
   pnpm db:migrate && pnpm db:seed
   ```
6. Rode em modo desenvolvimento:
   ```sh
   pnpm dev
   ```
7. Teste e verifique qualidade:
   ```sh
   pnpm lint
   pnpm test
   pnpm test:e2e
   ```

## Scripts

- `pnpm dev` — inicia web e api com hot-reload
- `pnpm build` — build de produção
- `pnpm lint` — lint com ESLint/Prettier
- `pnpm test` — testes unitários
- `pnpm test:e2e` — testes end-to-end
- `pnpm db:migrate` — migrações Prisma
- `pnpm db:seed` — dados de exemplo

## Licença

MIT
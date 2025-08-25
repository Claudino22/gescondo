import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.condominium.create({
    data: {
      name: 'Residencial Alpha',
      address: 'Rua das Flores, 123',
      cnpj: '00.000.000/0001-00',
      blocks: {
        create: [
          { name: 'Bloco A' },
          { name: 'Bloco B' },
          { name: 'Bloco C' }
        ]
      }
    }
  });
  // Continue com unidades, usuários, faturas, reservas, tickets...
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
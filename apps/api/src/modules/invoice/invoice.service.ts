import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

const prisma = new PrismaClient();

@Injectable()
export class InvoiceService {
  async findAll({ status, dueGte, dueLte }: { status?: string; dueGte?: string; dueLte?: string }) {
    return prisma.invoice.findMany({
      where: {
        status,
        dueDate: {
          gte: dueGte ? new Date(dueGte) : undefined,
          lte: dueLte ? new Date(dueLte) : undefined,
        },
      },
    });
  }

  async create(dto: CreateInvoiceDto) {
    return prisma.invoice.create({ data: dto });
  }

  async pay(id: number) {
    // Integrar com gateway de pagamento (ex: Stripe)
    return prisma.invoice.update({ where: { id }, data: { status: 'PAID' } });
  }

  async update(id: number, dto: UpdateInvoiceDto) {
    return prisma.invoice.update({ where: { id }, data: dto });
  }
}
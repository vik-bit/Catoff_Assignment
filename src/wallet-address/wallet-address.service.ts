// wallet-address.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient, Walletaddress } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class WalletAddressService {
    async findAll(): Promise<Walletaddress[]> {
        return prisma.walletaddress.findMany();
    }

    async findById(id: number): Promise<Walletaddress | null> {
        return prisma.walletaddress.findUnique({ where: { id } });
    }

    async create(walletAddress: Walletaddress): Promise<Walletaddress> {
        return prisma.walletaddress.create({ data: walletAddress });
    }

    async update(id: number, walletAddress: Walletaddress): Promise<Walletaddress | null> {
        return prisma.walletaddress.update({ where: { id }, data: walletAddress });
    }

    async delete(id: number): Promise<void> {
        await prisma.walletaddress.delete({ where: { id } });
    }
}

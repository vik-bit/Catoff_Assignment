// wallet-address.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';

@Controller('wallet-addresses')
export class WalletAddressController {
    constructor(private readonly walletAddressService: WalletAddressService) {}

    @Get()
    async findAll(): Promise<WalletAddress[]> {
        return this.walletAddressService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<WalletAddress | null> {
        return this.walletAddressService.findById(+id);
    }

    @Post()
    async create(@Body() walletAddress: WalletAddress): Promise<void> {
        await this.walletAddressService.create(walletAddress);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() walletAddress: WalletAddress): Promise<void> {
        await this.walletAddressService.update(+id, walletAddress);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.walletAddressService.delete(+id);
    }
}

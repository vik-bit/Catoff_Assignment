// wallet-address.module.ts
import { Module } from '@nestjs/common';
import { DatabaseConfig } from '../database.config';
import { DatabaseService } from '../database.service'; // Import DatabaseService
import { WalletAddressController } from './wallet-address.controller';
import { WalletAddressService } from './wallet-address.service';

@Module({
 
  controllers: [WalletAddressController],
  providers: [WalletAddressService, DatabaseService,DatabaseConfig], // Provide DatabaseService here
})
export class WalletAddressModule {}

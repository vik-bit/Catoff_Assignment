// Import the modules, controllers, and services
import { Module } from '@nestjs/common';
import { DatabaseConfig } from './database.config';
import { DatabaseService } from './database.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { WalletAddressModule } from './wallet-address/wallet-address.module';
import { UsersModule } from './users/users.module';
import { WalletAddressController } from './wallet-address/wallet-address.controller';
import { WalletAddressService } from './wallet-address/wallet-address.service'; // Import WalletService

@Module({
    imports: [WalletAddressModule, UsersModule], // Import the modules
    controllers: [UsersController, WalletAddressController], // Add WalletAddressController
    providers: [UsersService, DatabaseConfig, WalletAddressService,DatabaseService], // Add WalletService
})
export class AppModule {}

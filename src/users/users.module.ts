import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseConfig } from '../database.config';
import { DatabaseService } from '../database.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService,DatabaseService,DatabaseConfig]
})
export class UsersModule {}

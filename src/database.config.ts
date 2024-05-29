// database.config.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseConfig {
    host: string = 'localhost';
    port: number = 5432;
    username: string = 'postgres';
    password: string = '1234';
    database: string = 'crudDB';
}

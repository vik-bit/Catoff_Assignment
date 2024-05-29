// database.service.ts

import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { DatabaseConfig } from './database.config';

@Injectable()
export class DatabaseService {
    private pool: Pool;

    constructor(private readonly config: DatabaseConfig) {
        this.pool = new Pool({
            user: this.config.username,
            host: this.config.host,
            database: this.config.database,
            password: this.config.password,
            port: this.config.port,
        });
    }

    async query(sql: string, params?: any[]): Promise<any> {
        const client = await this.pool.connect();
        try {
            const result = await client.query(sql, params);
            return result.rows;
        } finally {
            client.release();
        }
    }
}

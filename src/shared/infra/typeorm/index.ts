import { Connection, createConnection, getConnectionOptions } from 'typeorm';

class TypeORMConnection {
  connection: Connection;

  async connect() {
    console.log('[TypeORM] Connecting...');
    const options = await getConnectionOptions();
    Object.assign(options, {
      database: process.env.NODE_ENV === 'test' ? 'testdb' : options.database,
    });
    this.connection = await createConnection(options);
    console.log('[TypeORM] client connected!');
  }

  async disconnect() {
    await this.connection.close();
  }
}

const database = new TypeORMConnection();

export { database };

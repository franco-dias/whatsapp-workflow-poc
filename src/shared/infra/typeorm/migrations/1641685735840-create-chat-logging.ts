import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createChatLogging1641685735840 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'chat_logging',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'where', type: 'varchar' },
          { name: 'log', type: 'varchar' },
          { name: 'type', type: 'varchar' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('chat_logging');
  }
}

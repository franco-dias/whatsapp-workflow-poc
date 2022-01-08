import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createMessageLogging1641685388856 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'message_logging',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'wa_id', type: 'varchar' },
          { name: 'customer_wa_id', type: 'varchar' },
          { name: 'message_id', type: 'uuid', isNullable: true },
          { name: 'answer_id', type: 'uuid', isNullable: true },
          { name: 'message_timestamp', type: 'timestamp' },
          { name: 'type', type: 'varchar' },
        ],
        foreignKeys: [
          {
            name: 'FKMessageLoggingMessage',
            referencedTableName: 'workflow_message',
            referencedColumnNames: ['id'],
            columnNames: ['message_id'],
          },
          {
            name: 'FKMessageLoggingAnswer',
            referencedTableName: 'workflow_answer',
            referencedColumnNames: ['id'],
            columnNames: ['answer_id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('message_logging');
  }
}

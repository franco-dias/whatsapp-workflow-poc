import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createWildcard1641690704380 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'workflow_wildcard',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'text', type: 'varchar' },
          { name: 'workflow_id', type: 'uuid' },
          { name: 'next_message_id', type: 'uuid' },
        ],
        foreignKeys: [
          {
            name: 'FKWildCardWorkflow',
            referencedColumnNames: ['id'],
            columnNames: ['workflow_id'],
            referencedTableName: 'workflow',
          },
          {
            name: 'FKWildCardMessage',
            referencedColumnNames: ['id'],
            columnNames: ['next_message_id'],
            referencedTableName: 'workflow_message',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('workflow_wildcard');
  }
}

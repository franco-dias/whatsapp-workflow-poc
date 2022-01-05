import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createMessage1641326601931 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'workflow_message',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'message_type', type: 'varchar', isNullable: false },
          { name: 'text', type: 'varchar', isNullable: false },
          { name: 'workflow_id', type: 'uuid', isNullable: true },
        ],
        foreignKeys: [
          {
            name: 'FKMessageWorkflow',
            referencedTableName: 'workflow',
            referencedColumnNames: ['id'],
            columnNames: ['workflow_id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('workflow_message');
  }
}

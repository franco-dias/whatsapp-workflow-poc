import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createAnswer1641330159835 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'workflow_answer',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'text', type: 'varchar', isNullable: false },
          { name: 'answer_type', type: 'varchar', isNullable: false },
          { name: 'prev_message_id', type: 'uuid', isNullable: false },
          { name: 'next_message_id', type: 'uuid', isNullable: true },
        ],
        foreignKeys: [
          {
            name: 'FKAnswerPrevMessage',
            referencedTableName: 'workflow_message',
            referencedColumnNames: ['id'],
            columnNames: ['prev_message_id'],
          },
          {
            name: 'FKAnswerNextMessage',
            referencedTableName: 'workflow_message',
            referencedColumnNames: ['id'],
            columnNames: ['next_message_id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('answer');
  }
}

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createWorkflow1641326317498 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'workflow',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'code', type: 'varchar', isNullable: false, isUnique: true },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('workflow');
  }
}

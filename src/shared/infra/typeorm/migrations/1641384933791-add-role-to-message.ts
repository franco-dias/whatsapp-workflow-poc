import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addRoleToMessage1641384933791 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'workflow_message',
      new TableColumn({
        name: 'role',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('workflow_message', 'role');
  }
}

import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateRequestTable1597260275210 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      {
        name: 'id',
        type: 'serial',
        isPrimary: true,
        isUnique: true,
      },
      {
        name: 'tenantId',
        type: 'varchar',
        length: '256',
        isNullable: false,
      },
      {
        name: 'url',
        type: 'text',
        isNullable: false,
      },
      {
        name: 'statusCode',
        type: 'smallint',
        isNullable: false,
      },
      {
        name: 'userAgent',
        type: 'text',
        isNullable: false,
      },
      {
        name: 'ip',
        type: 'varchar',
        length: '32',
        isNullable: false,
      },
      {
        name: 'createdAt',
        type: 'timestamp',
        isNullable: false,
      },
      {
        name: 'updatedAt',
        type: 'timestamp',
        isNullable: false,
      },
    ];
    const table = new Table({ columns, name: 'requests' });
    await queryRunner.createTable(table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('requests');
  }
}

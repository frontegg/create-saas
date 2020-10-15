import { MigrationInterface, QueryRunner } from 'typeorm';
import { requestSeed } from './request.seed';
import { Request } from '../entity/request';

export class SeedRequest1597245407937 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Request).save(requestSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Request).clear();
  }
}

import {MigrationInterface, QueryRunner} from "typeorm";

export class SakeRefactor1613332756027 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "sake" RENAME COLUMN "name" TO "title"`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "sake" RENAME COLUMN "title" TO "name"`,
        );
    }
}

import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSake1613158326270 implements MigrationInterface {
    name = 'CreateSake1613158326270'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sake" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, "company" character varying NOT NULL, "alcohol" character varying NOT NULL, "region" character varying NOT NULL, "flavors" json, CONSTRAINT "PK_491f749126138f6e5f40a62fe55" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sake"`);
    }

}

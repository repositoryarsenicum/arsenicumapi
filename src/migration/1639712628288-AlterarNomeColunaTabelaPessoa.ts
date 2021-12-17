import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterarNomeColunaTabelaPessoa1639712628288 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE TB_PESSOA RENAME COLUMN ATIVO TO IS_ATIVO`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> { }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class InserirColunaDataUsuarioTabelaPessoa1639756821146 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE TB_PESSOA ADD COLUMN DATA_CADASTRO DATETIME NULL AFTER NOME`);
        await queryRunner.query(`ALTER TABLE TB_PESSOA ADD COLUMN DATA_ATUALIZACAO DATETIME NULL AFTER DATA_CADASTRO`);
        await queryRunner.query(`ALTER TABLE TB_PESSOA ADD COLUMN USUSARIO_ATUALIZACAO VARCHAR(85) AFTER DATA_ATUALIZACAO`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

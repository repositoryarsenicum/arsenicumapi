import {MigrationInterface, QueryRunner} from "typeorm";

export class InserirColunaDataUsuarioTabelaTipoPessoa1639757155042 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE TB_TIPO_PESSOA ADD COLUMN DATA_CADASTRO DATETIME NULL AFTER SIGLA`);
        await queryRunner.query(`ALTER TABLE TB_TIPO_PESSOA ADD COLUMN DATA_ATUALIZACAO DATETIME NULL AFTER DATA_CADASTRO`);
        await queryRunner.query(`ALTER TABLE TB_TIPO_PESSOA ADD COLUMN USUSARIO_ATUALIZACAO VARCHAR(85) AFTER DATA_ATUALIZACAO`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

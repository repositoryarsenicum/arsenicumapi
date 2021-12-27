import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class InserirCargaBasicaTabelaCategoriaLancamento1640631999900 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO TB_CATEGORIA_LANCAMENTO (CODIGO, DESCRICAO) VALUES (1, 'Receita Fixa')`);
        await queryRunner.query(`INSERT INTO TB_CATEGORIA_LANCAMENTO (CODIGO, DESCRICAO) VALUES (2, 'Receita Variável')`);
        await queryRunner.query(`INSERT INTO TB_CATEGORIA_LANCAMENTO (CODIGO, DESCRICAO) VALUES (3, 'Despesa Fixa')`);
        await queryRunner.query(`INSERT INTO TB_CATEGORIA_LANCAMENTO (CODIGO, DESCRICAO) VALUES (4, 'Despesa Variável')`);
        await queryRunner.query(`INSERT INTO TB_CATEGORIA_LANCAMENTO (CODIGO, DESCRICAO) VALUES (5, 'Concessão de Empréstimo')`);
        await queryRunner.query(`INSERT INTO TB_CATEGORIA_LANCAMENTO (CODIGO, DESCRICAO) VALUES (6, 'Adesão de Empréstimo')`);
        await queryRunner.query(`INSERT INTO TB_CATEGORIA_LANCAMENTO (CODIGO, DESCRICAO) VALUES (7, 'Doação Pessoa Física')`);
        await queryRunner.query(`INSERT INTO TB_CATEGORIA_LANCAMENTO (CODIGO, DESCRICAO) VALUES (8, 'Doação Pessoa Jurídica')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("TRUNCATE TABLE TB_CATEGORIA_LANCAMENTO");
    }

}

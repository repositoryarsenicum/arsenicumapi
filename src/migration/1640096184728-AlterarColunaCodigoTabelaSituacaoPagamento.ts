import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterarColunaCodigoTabelaSituacaoPagamento1640096184728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE TB_SITUACAO_PAGAMENTO MODIFY CODIGO INTEGER(11) NOT NULL AUTO_INCREMENT;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

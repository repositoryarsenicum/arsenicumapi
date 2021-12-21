import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTabelaTipoSituacaoPagamento1640046602927 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table( {
            name: "TB_SITUACAO_PAGAMENTO",
            columns: [
                {
                    name: "CODIGO",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "DESCRICAO",
                    type: "VARCHAR(85)"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("TB_SITUACAO_PAGAMENTO");
    }

}

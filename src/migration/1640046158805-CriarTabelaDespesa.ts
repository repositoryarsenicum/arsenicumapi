import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTabelaDespesa1640046158805 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table( {
            name: "TB_DESPESA",
            columns: [
                {
                    name: "CODIGO",
                    type: "INT",
                    isPrimary: true
                },
                {
                    name: "ID_TIPO_DESPESA",
                    type: "INT"
                },
                {
                    name: "ID_SITUACAO_PAGAMENTO",
                    type: "INT",
                },
                {
                    name: "ID_PESSOA_FAVORECIDO",
                    type: "INT"
                },
                {
                    name: "DATA_VENCIMENTO",
                    type: "TIMESTAMP",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "DATA_CADASTRO",
                    type: "TIMESTAMP",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "DATA_ATUALIZACAO",
                    type: "TIMESTAMP",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "USUARIO_ATUALIZACAO",
                    type: "VARCHAR(85)"
                },
                {
                    name: "VALOR_DESPESA",
                    type: "VARCHAR(85)"
                },
                {
                    name: "IS_PAGO",
                    type: "BOOLEAN"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("TB_DESPESA");
    }

}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTabelaTipoDespesa1640039383651 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table( {
            name: "TB_TIPO_DESPESA",
            columns: [
                {
                    name: "CODIGO",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "DESCRICAO",
                    type: "varchar"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("TB_TIPO_DESPESA");
    }

}

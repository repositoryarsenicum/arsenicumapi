import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTabelaCategoriaLancamento1640631631281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "TB_CATEGORIA_LANCAMENTO",
            columns: [
                {
                    name: "CODIGO",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "DESCRICAO",
                    type: "varchar(85)"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("TB_CATEGORIA_LANCAMENTO");
    }

}

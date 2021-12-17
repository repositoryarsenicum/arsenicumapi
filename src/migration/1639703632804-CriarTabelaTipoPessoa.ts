import {MigrationInterface, QueryRunner} from "typeorm";

export class CriarTabelaTipoPessoa1639703632804 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE TB_TIPO_PESSOA(CODIGO INTEGER NOT NULL AUTO_INCREMENT, DESCRICAO VARCHAR(85) NOT NULL UNIQUE, SIGLA CHAR(3) NOT NULL UNIQUE, PRIMARY KEY(CODIGO)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE TB_TIPO_PESSOA`);
    }

}

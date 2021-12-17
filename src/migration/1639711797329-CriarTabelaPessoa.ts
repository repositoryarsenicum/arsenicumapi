import {MigrationInterface, QueryRunner} from "typeorm";

export class CriarTabelaPessoa1639711797329 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE TB_PESSOA(CODIGO INTEGER NOT NULL AUTO_INCREMENT, ID_TIPO_PESSOA INTEGER NOT NULL, ID_USUARIO INTEGER NULL, NOME VARCHAR(85) NOT NULL UNIQUE, ATIVO BOOLEAN DEFAULT TRUE NOT NULL, PRIMARY KEY(CODIGO)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE TB_PESSOA`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterarColunaCodigoTabelaDespesa1640098409082 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE TB_DESPESA MODIFY CODIGO INTEGER(11) NOT NULL AUTO_INCREMENT;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

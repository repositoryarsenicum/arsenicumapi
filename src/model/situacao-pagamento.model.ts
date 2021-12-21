import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";
import { IsNumber, IsString } from "class-validator";

@Entity("TB_SITUACAO_PAGAMENTO")
export class SituacaoPagamentoModel {

    @PrimaryGeneratedColumn()
    @IsNumber()
    @Generated("increment")
    public codigo?: number;

    @ApiProperty()
    @IsString()
    @Column({ name: "DESCRICAO", type: "varchar", unique: true, length: "85", nullable: false })
    public descricao?: string;
    
}
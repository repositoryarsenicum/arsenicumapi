import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";
import { IsNumber, IsString } from "class-validator";

@Entity("TB_TIPO_DESPESA")
export class TipoDespesaModel {

    @PrimaryGeneratedColumn()
    @Generated("increment")
    @IsNumber()
    public codigo?: number;

    @ApiProperty()
    @IsString()
    @Column({ name: "DESCRICAO", type: "varchar", unique: true, length: "85", nullable: false })
    public descricao?: string;
    
}
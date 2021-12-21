import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNumber, IsString } from "class-validator";

@Entity("TB_TIPO_DESPESA")
export class TipoDespesaModel {

    @PrimaryGeneratedColumn()
    @IsNumber()
    public codigo?: number;

    @ApiProperty()
    @IsString()
    @Column({ name: "DESCRICAO", type: "varchar", unique: true, length: "85", nullable: false })
    public descricao?: string;
    
}
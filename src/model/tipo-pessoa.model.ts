import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNumber, IsString } from "class-validator";

@Entity("TB_TIPO_PESSOA")
export class TipoPessoaModel {

    @PrimaryGeneratedColumn()
    @IsNumber()
    public codigo?: number;

    @ApiProperty()
    @IsString()
    @Column({ type: "varchar", length: "85", unique: true, nullable: false })
    public descricao?: string;

    @ApiProperty()
    @IsString()
    @Column({ type: "char", length: "2", unique: true, nullable: false })
    public sigla?: string;
    
}
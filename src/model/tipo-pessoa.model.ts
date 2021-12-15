import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsNumber, IsString } from "class-validator";
import { PessoaModel } from "./pessoa.model";

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

    @OneToOne(() => PessoaModel, (pessoaModel: PessoaModel) => pessoaModel.tipoPessoaModel)
    public pessoaModel: PessoaModel;
    
}
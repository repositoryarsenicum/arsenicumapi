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
    @Column({ type: "varchar", unique: true, length: "85", nullable: false })
    public descricao?: string;

    @ApiProperty()
    @IsString()
    @Column({ type: "char", unique: true, length: "2", nullable: false })
    public sigla?: string;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    public dataCadastro?: Date;

    @OneToOne(() => PessoaModel, (pessoaModel: PessoaModel) => pessoaModel.tipoPessoaModel)
    public pessoaModel: PessoaModel;
    
}
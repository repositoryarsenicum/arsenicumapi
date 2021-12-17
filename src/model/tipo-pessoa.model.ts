import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsDate, IsNumber, IsString } from "class-validator";
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

    @IsDate()
    @Column({ name: "DATA_CADASTRO", type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    public dataCadastro?: Date;

    @IsDate()
    @Column({ name: "DATA_ATUALIZACAO", type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    public dataAtualizacao?: Date;

    @ApiProperty()
    @IsString()
    @Column({ name: "USUSARIO_ATUALIZACAO", type: "varchar", unique: true, length: "85", nullable: false })
    public usuarioAtualizacao?: string;

    @OneToOne(() => PessoaModel, (pessoaModel: PessoaModel) => pessoaModel.tipoPessoaModel)
    public pessoaModel: PessoaModel;
    
}
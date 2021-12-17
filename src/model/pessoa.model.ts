import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";
import { UsuarioModel } from "../model/usuario.model";
import { TipoPessoaModel } from "./tipo-pessoa.model";

@Entity("TB_PESSOA")
export class PessoaModel {

    @PrimaryGeneratedColumn()
    @IsNumber()
    public codigo?: number;

    @ApiProperty()
    @IsString()
    @Column({ name: "NOME", type: "varchar", unique: true, length: "85", nullable: false })
    public nome?: string;

    @IsDate()
    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    public dataCadastro?: Date;

    @IsDate()
    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    public dataAtualizacao?: Date;

    @ApiProperty()
    @IsString()
    @Column({ name: "USUSARIO_ATUALIZACAO", type: "varchar", unique: true, length: "85", nullable: false })
    public usuarioAtualizacao?: string;

    @IsBoolean()
    @Column({ name: "IS_ATIVO", default: true })
    public isAtivo?: boolean;

    @OneToOne(() => UsuarioModel)
    @JoinColumn({ name: "ID_USUARIO" })
    public usuarioModel: UsuarioModel;

    @OneToOne(() => TipoPessoaModel, { cascade: true, eager: true })
    @JoinColumn({ name: "ID_TIPO_PESSOA" })
    public tipoPessoaModel: TipoPessoaModel;
    
}
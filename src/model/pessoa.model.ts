import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsNumber, IsString } from "class-validator";
import { UsuarioModel } from "../model/usuario.model";
import { TipoPessoaModel } from "./tipo-pessoa.model";

@Entity("TB_PESSOA")
export class PessoaModel {

    @PrimaryGeneratedColumn()
    @IsNumber()
    public codigo?: number;

    @ApiProperty()
    @IsString()
    @Column({ name: "NOME", type: "varchar", length: "85", nullable: false })
    public nome?: string;

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
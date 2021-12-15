import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsNumber, IsString } from "class-validator";
import { PessoaModel } from "../model/pessoa.model";
import { PerfilModel } from "./perfil.model";

@Entity("TB_USUARIO")
export class UsuarioModel {

    @PrimaryGeneratedColumn()
    @IsNumber()
    public codigo?: number;

    @ApiProperty()
    @IsString()
    @Column({ name: "IDENTIFICADOR", type: "varchar", length: "85", nullable: false })
    public identificador?: string;

    @ApiProperty()
    @IsString()
    @Column({ name: "CHAVE", type: "varchar", length: "20", nullable: false })
    public chave?: string;

    @OneToOne(() => PessoaModel, (pessoaModel) => pessoaModel.usuarioModel)
    public pessoaModel: PessoaModel;

    @OneToOne(() => PerfilModel)
    @JoinColumn({name: "ID_PERFIL"})
    public perfilModel: PerfilModel;
    
}
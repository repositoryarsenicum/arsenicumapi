import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsNumber, IsString } from "class-validator";
import { UsuarioModel } from "./usuario.model";

@Entity("TB_PERFIL")
export class PerfilModel {

    @PrimaryGeneratedColumn()
    @IsNumber()
    codigo?: number;

    @ApiProperty()
    @IsString()
    @Column()
    descricao?: string;

    @OneToOne(() => UsuarioModel, (usuarioModel: UsuarioModel) => usuarioModel.perfilModel)
    public usuarioModel: UsuarioModel;
    
}
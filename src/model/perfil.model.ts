import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNumber, IsString } from "class-validator";

@Entity("TB_PERFIL")
export class PerfilModel {

    @PrimaryGeneratedColumn()
    @IsNumber()
    codigo?: number;

    @ApiProperty()
    @IsString()
    @Column()
    descricao?: string;
    
}
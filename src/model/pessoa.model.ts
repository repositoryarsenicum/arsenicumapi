import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsNumber, IsString } from "class-validator";

@Entity("TB_PESSOA")
export class PessoaModel {

    @PrimaryGeneratedColumn()
    @IsNumber()
    public codigo?: number;

    @ApiProperty()
    @IsString()
    @Column({ type: "varchar", length: "85", unique: true, nullable: false })
    public nome?: string;

    @ApiProperty()
    @IsBoolean()
    @Column({ default: true })
    public isAtivo?: boolean;
    
}
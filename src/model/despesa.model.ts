import { ApiProperty } from "@nestjs/swagger";
import { Column, Double, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";
import { TipoDespesaModel } from "./tipo-despesa.model";
import { SituacaoPagamentoModel } from "./situacao-pagamento.model";
import { PessoaModel } from "./pessoa.model";

@Entity("TB_DESPESA")
export class DespesaModel {

    @PrimaryGeneratedColumn()
    @IsNumber()
    public codigo?: number;

    @ApiProperty()
    @IsDate()
    @Column( { name: "DATA_VENCIMENTO", type: "date", nullable: true })
    public dataVencimento?: Date;

    @ApiProperty()
    @IsDate()
    @Column( { name: "DATA_CADASTRO", type: "date", nullable: false })
    public dataCadastro?: Date;

    @ApiProperty()
    @IsDate()
    @Column( { name: "DATA_ATUALIZACAO", type: "date", nullable: true })
    public dataAtualizacao?: Date;

    @ApiProperty()
    @IsString()
    @Column({ name: "USUARIO_ATUALIZACAO", type: "varchar", length: "85", nullable: true })
    public usuarioAtualizacao?: String;

    @ApiProperty()
    @IsNumber()
    @Column({ name: "VALOR_DESPESA", type: "double", nullable: true })
    public valorDespesa?: Double;

    @ApiProperty()
    @IsBoolean()
    @Column({ name: "IS_PAGO", type: "boolean", nullable: false })
    public isPago?: Boolean;

    @OneToOne(() => TipoDespesaModel, { cascade: true, eager: true })
    @JoinColumn({ name: "ID_TIPO_DESPESA" })
    public tipoDespesaModel: TipoDespesaModel;

    @OneToOne(() => SituacaoPagamentoModel, { cascade: true, eager: true })
    @JoinColumn({ name: "ID_SITUACAO_PAGAMENTO" })
    public situacaoPagamentoModel: SituacaoPagamentoModel;

    @OneToOne(() => PessoaModel, { cascade: true, eager: true })
    @JoinColumn({ name: "ID_PESSOA" })
    public pessoaModel: PessoaModel;
    
}
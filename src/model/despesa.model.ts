import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @IsDate()
    @Column( { name: "DATA_CADASTRO", type: "date", nullable: false })
    public dataCadastro?: Date;

    @IsDate()
    @Column( { name: "DATA_ATUALIZACAO", type: "date", nullable: true })
    public dataAtualizacao?: Date;

    @IsString()
    @Column({ name: "USUARIO_ATUALIZACAO", type: "varchar", length: "85", nullable: false })
    public usuarioAtualizacao?: String;

    @ApiProperty()
    @IsNumber()
    @Column({ name: "VALOR_DESPESA", type: "decimal", precision: 10, scale: 2, default: 0.0, nullable: true })
    public valorDespesa?: number;

    @IsBoolean()
    @Column({ name: "IS_PAGO", type: "boolean", default: true, nullable: false })
    public isPago?: Boolean;

    @ApiProperty()
    @OneToOne(() => TipoDespesaModel, { cascade: true, eager: true })
    @JoinColumn({ name: "ID_TIPO_DESPESA" })
    public tipoDespesaModel: TipoDespesaModel;

    @ApiProperty()
    @OneToOne(() => SituacaoPagamentoModel, { cascade: true, eager: true })
    @JoinColumn({ name: "ID_SITUACAO_PAGAMENTO" })
    public situacaoPagamentoModel: SituacaoPagamentoModel;

    @ApiProperty()
    @OneToOne(() => PessoaModel, { cascade: true, eager: true })
    @JoinColumn({ name: "ID_PESSOA_FAVORECIDO" })
    public pessoaFavorecidoModel: PessoaModel;
    
}
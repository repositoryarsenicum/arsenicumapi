import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SituacaoPagamentoModel } from "../model/situacao-pagamento.model";

@Injectable()
export class SituacaoPagamentoService {

    public constructor(
      @InjectRepository(SituacaoPagamentoModel) private situacaoPagamentoRepository: Repository<SituacaoPagamentoModel>
    ) {}

    public async save(situacaoPagamentoModelParameter: SituacaoPagamentoModel) : Promise<SituacaoPagamentoModel> {
        return await this.situacaoPagamentoRepository.save(situacaoPagamentoModelParameter);
    }

    public findAll() : Promise<SituacaoPagamentoModel[]> {
        return this.situacaoPagamentoRepository.find();
    }

    public findOne(codigoParameter: number) : Promise<SituacaoPagamentoModel> {
        const situacaoPagamento = this.situacaoPagamentoRepository.findOne( codigoParameter );
        if(!situacaoPagamento) {
            throw new NotFoundException("Tipo de Paagamento não Encontrada!");
        }
        return situacaoPagamento;
    }

}

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TipoDespesaModel } from "../model/tipo-despesa.model";

@Injectable()
export class TipoDespesaService {

    public constructor(
      @InjectRepository(TipoDespesaModel) private tipoDespesaModelRepository: Repository<TipoDespesaModel>
    ) {}

    public async save(tipoDespesaParameter: TipoDespesaModel) : Promise<TipoDespesaModel> {
        return await this.tipoDespesaModelRepository.save(tipoDespesaParameter);
    }

    public findAll() : Promise<TipoDespesaModel[]> {
        return this.tipoDespesaModelRepository.find();
    }

    public findOne(codigoParameter: number) : Promise<TipoDespesaModel> {
        const tipoDespesa = this.tipoDespesaModelRepository.findOne( codigoParameter );
        if(!tipoDespesa) {
            throw new NotFoundException("Tipo de Despesa não Encontrada!");
        }
        return tipoDespesa;
    }

}

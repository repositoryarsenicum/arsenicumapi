import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DespesaModel } from "../model/despesa.model";

@Injectable()
export class DespesaService {

    public constructor(
      @InjectRepository(DespesaModel) private despesaRepository: Repository<DespesaModel>
    ) {}

    public async save(despesaParameter: DespesaModel) : Promise<DespesaModel> {
        return await this.despesaRepository.save(despesaParameter);
    }

    public findAll() : Promise<DespesaModel[]> {
        return this.despesaRepository.find();
    }

    public findOne(codigoParameter: number) : Promise<DespesaModel> {
        const despesa = this.despesaRepository.findOne( codigoParameter );
        if(!despesa) {
            throw new NotFoundException("Despesa não Encontrada!");
        }
        return despesa;
    }

}

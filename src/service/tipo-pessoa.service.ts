import { Injectable, NotFoundException } from "@nestjs/common";
import { TipoPessoaModel } from "../model/tipo-pessoa.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TipoPessoaService {

    public constructor(
      @InjectRepository(TipoPessoaModel) private tipoPessoaRepository: Repository<TipoPessoaModel>
    ) {}

    public async save(tipoPessoaModelParameter: TipoPessoaModel) : Promise<TipoPessoaModel> {
        return await this.tipoPessoaRepository.save(tipoPessoaModelParameter);
    }

    public findAll() : Promise<TipoPessoaModel[]> {
        return this.tipoPessoaRepository.find();
    }

    public findOne(codigoParameter: number) : Promise<TipoPessoaModel> {
        const tipoPessoaCadastrada = this.tipoPessoaRepository.findOne( codigoParameter );
        if(!tipoPessoaCadastrada) {
            throw new NotFoundException("Tipo de Pessoa não Encontrada!");
        }
        return tipoPessoaCadastrada;
    }

}

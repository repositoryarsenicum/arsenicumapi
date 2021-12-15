import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PessoaModel } from "../model/pessoa.model";

@Injectable()
export class PessoaService {

    private readonly logger = new Logger(PessoaService.name);

    public constructor(
      @InjectRepository(PessoaModel) private pessoaRepository: Repository<PessoaModel>
    ) {}

    public async save(pessoaModelParameter: PessoaModel) : Promise<PessoaModel> {
        this.logger.log(`Os dados da pessoa [${pessoaModelParameter.nome}] foram cadastrados com sucesso!`);
        return await this.pessoaRepository.save(pessoaModelParameter);
    }

    public findAll() : Promise<PessoaModel[]> {
        return this.pessoaRepository.find({ isAtivo: true });
    }

}

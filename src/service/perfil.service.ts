import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PerfilModel } from "../model/perfil.model";

@Injectable()
export class PerfilService {

    private readonly logger = new Logger(PerfilService.name);

    public constructor(
      @InjectRepository(PerfilModel) private perfilRepository: Repository<PerfilModel>
    ) {}

    public async save(perfilModelParameter: PerfilModel) : Promise<PerfilModel> {
        this.logger.log("PessoaRepository: Dados cadastrados com sucesso!");
        return await this.perfilRepository.save(perfilModelParameter);
    }

    public findAll() : Promise<PerfilModel[]> {
        return this.perfilRepository.find();
    }

    public findOne(codigoParameter: number) : Promise<PerfilModel> {
        const perfilCadastrado = this.perfilRepository.findOne( codigoParameter );
        if(!perfilCadastrado) {
            throw new NotFoundException("Perfil não Encontrado!");
        }
        return perfilCadastrado;
    }

}

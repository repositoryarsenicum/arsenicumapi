import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsuarioModel } from "../model/usuario.model";

@Injectable()
export class UsuarioService {

    private readonly logger = new Logger(UsuarioService.name);

    public constructor(
      @InjectRepository(UsuarioModel) private usuarioRepository: Repository<UsuarioModel>
    ) {}

    public async save(usuarioModelParameter: UsuarioModel) : Promise<UsuarioModel> {
        this.logger.log("PessoaRepository: Dados cadastrados com sucesso!");
        return await this.usuarioRepository.save(usuarioModelParameter);
    }

    public findAll() : Promise<UsuarioModel[]> {
        return this.usuarioRepository.find();
    }

}

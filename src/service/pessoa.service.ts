import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PessoaModel } from "../model/pessoa.model";
import { UsuarioService } from "./usuario.service";
import { UsuarioModel } from "../model/usuario.model";

@Injectable()
export class PessoaService {

    private readonly logger = new Logger(PessoaService.name);

    public constructor(
      @InjectRepository(PessoaModel) private pessoaRepository: Repository<PessoaModel>,
      private usuarioRepository: UsuarioService
    ) {}

    public async save(pessoaModelParameter: any) : Promise<PessoaModel> {

        const usuarioRequest = new UsuarioModel();
            usuarioRequest.identificador = pessoaModelParameter.identificador;
            usuarioRequest.chave = pessoaModelParameter.chave;
        const usuarioCadastrado = await this.usuarioRepository.save(usuarioRequest);

        const pessoaRequest = new PessoaModel();
            pessoaRequest.isAtivo = pessoaModelParameter.isAtivo;
            pessoaRequest.nome = pessoaModelParameter.nome;
            pessoaRequest.usuarioModel = usuarioCadastrado;

        this.logger.log(`Os dados da pessoa [${pessoaModelParameter.nome}] foram cadastrados com sucesso!`);
        return await this.pessoaRepository.save(pessoaRequest);
    }

    // TODO -- Recuperar apenas pessoas ativas no sistema
    public findAll() : Promise<PessoaModel[]> {
        return this.pessoaRepository.find({ relations: ["usuarioModel"]});
    }

}

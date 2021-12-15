import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PessoaModel } from "../model/pessoa.model";
import { UsuarioService } from "./usuario.service";
import { UsuarioModel } from "../model/usuario.model";
import { TipoPessoaService } from "./tipo-pessoa.service";

@Injectable()
export class PessoaService {

    private readonly logger = new Logger(PessoaService.name);

    public constructor(
      @InjectRepository(PessoaModel) private pessoaRepository: Repository<PessoaModel>,
      private usuarioService: UsuarioService,
      private tipoPessoaService: TipoPessoaService
    ) {}

    public async save(pessoaModelParameter: any) : Promise<PessoaModel> {
        this.logger.warn(pessoaModelParameter);
        if(pessoaModelParameter.usuarioModel.identificador && pessoaModelParameter.usuarioModel.chave) {
            const usuarioRequest = new UsuarioModel();
                usuarioRequest.identificador = pessoaModelParameter.usuarioModel.identificador;
                usuarioRequest.chave = pessoaModelParameter.usuarioModel.chave;
            const usuarioCadastrado = await this.usuarioService.save(usuarioRequest);
            const tipoPessoaRequest = await this.tipoPessoaService.findOne(pessoaModelParameter.tipoPessoaModel.codigo);
            const pessoaRequest = new PessoaModel();
                pessoaRequest.isAtivo = pessoaModelParameter.isAtivo;
                pessoaRequest.nome = pessoaModelParameter.nome;
                pessoaRequest.usuarioModel = usuarioCadastrado;
                pessoaRequest.tipoPessoaModel = tipoPessoaRequest;
            this.logger.log(`Os dados da pessoa [${pessoaModelParameter.nome}] foram cadastrados com sucesso!`);
            return await this.pessoaRepository.save(pessoaRequest);
        } else {
            throw new Error("Não foi possível cadastrar a pessoa informada!");
        }
    }

    // TODO -- Recuperar apenas pessoas ativas no sistema
    public findAll() : Promise<PessoaModel[]> {
        return this.pessoaRepository.find({ relations: ["usuarioModel", "tipoPessoaModel"]});
    }

}

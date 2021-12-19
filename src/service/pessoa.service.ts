import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PessoaModel } from "../model/pessoa.model";
import { UsuarioService } from "./usuario.service";
import { UsuarioModel } from "../model/usuario.model";
import { TipoPessoaService } from "./tipo-pessoa.service";
import { PerfilService } from "./perfil.service";
import * as bcrypt from "bcrypt";
import { from, Observable } from "rxjs";

@Injectable()
export class PessoaService {

    private readonly logger = new Logger(PessoaService.name);

    public constructor(
      @InjectRepository(PessoaModel) private pessoaRepository: Repository<PessoaModel>,
      private usuarioService: UsuarioService,
      private tipoPessoaService: TipoPessoaService,
      private perfilService: PerfilService
    ) {}

    public async save(pessoaModelParameter: any) : Promise<PessoaModel> {
        if(pessoaModelParameter.usuarioModel.identificador && pessoaModelParameter.usuarioModel.chave) {
            const usuarioRequest = new UsuarioModel();
                usuarioRequest.identificador = pessoaModelParameter.usuarioModel.identificador;
                usuarioRequest.chave = bcrypt.hashSync(pessoaModelParameter.usuarioModel.chave, 10);
                usuarioRequest.perfilModel = await this.perfilService.findOne(pessoaModelParameter.usuarioModel.perfilModel.codigo);
            const usuarioCadastrado = await this.usuarioService.save(usuarioRequest);
            const tipoPessoaRequest = await this.tipoPessoaService.findOne(pessoaModelParameter.tipoPessoaModel.codigo);
            const pessoaRequest = new PessoaModel();
                pessoaRequest.isAtivo = pessoaModelParameter.isAtivo;
                pessoaRequest.nome = pessoaModelParameter.nome;
                pessoaRequest.usuarioModel = usuarioCadastrado;
                pessoaRequest.tipoPessoaModel = tipoPessoaRequest;
            this.logger.log(`Os dados da pessoa [${pessoaModelParameter.nome}] foram cadastrados com sucesso!`);
            return await this.pessoaRepository.create(pessoaRequest);
        } else {
            throw new Error("Não foi possível cadastrar a pessoa informada!");
        }
    }

    public async criarPessoaFisica(pessoaModelParameter: PessoaModel) : Promise<PessoaModel> {
        try {
            pessoaModelParameter.tipoPessoaModel = await this.tipoPessoaService.findOne(1);
            return await this.pessoaRepository.save(pessoaModelParameter);
        } catch (errorResponse) {
            throw new Error(errorResponse);
            throw new Error("Não foi possível cadastrar a pessoa informada!");
        }
    }

    public async criarPessoaJuridica(pessoaModelParameter: PessoaModel) : Promise<PessoaModel> {
        try {
            pessoaModelParameter.tipoPessoaModel = await this.tipoPessoaService.findOne(2);
            return await this.pessoaRepository.save(pessoaModelParameter);
        } catch (errorResponse) {
            throw new Error(errorResponse);
            throw new Error("Não foi possível cadastrar a pessoa informada!");
        }
    }

    public findAll() : Promise<PessoaModel[]> {
        return this.pessoaRepository.find({ where: { isAtivo: true }});
    }

    public recuperarDadosPessoaFisica() : Promise<PessoaModel[]> {
        return this.pessoaRepository.find({ where: { tipoPessoaModel: 1, isAtivo: true }, relations: ["tipoPessoaModel"]});
    }

    public recuperarDadosPessoaJuridica() : Promise<PessoaModel[]> {
        return this.pessoaRepository.find({ where: { tipoPessoaModel: 2,  isAtivo: true }, relations: ["tipoPessoaModel"]});
    }

    public recuperarDadosPessoaJuridicaPaginada(take = 10, skip = 0) : Observable<PessoaModel[]> {
        return from(this.pessoaRepository.findAndCount({take, skip}).then(([pessoaModelList]) => {
            return <PessoaModel[]>pessoaModelList;
        }));
    }

    public async excluirPessoa(codigoPessoa: number) {
        const pessoaModel = await this.pessoaRepository.findOne(codigoPessoa);
        if(!pessoaModel) {
            throw new NotFoundException("Pessoa Não Encontrada na Base de Dados!");
        }
        return await this.pessoaRepository.remove(pessoaModel);
    }

}

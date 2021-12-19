import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { PessoaService } from "../service/pessoa.service";
import { PessoaModel } from "../model/pessoa.model";
import { Observable } from "rxjs";

@Controller('pessoa')
export class PessoaController {

    public constructor(
        private pessoaService: PessoaService,
    ) {}

    @Post()
    @ApiBody({ type: PessoaModel })
    public async save(@Body() pessoaModelParameter: any) : Promise<PessoaModel> {
        return await this.pessoaService.save(pessoaModelParameter);
    }

    @Post("fisica")
    @ApiBody({ type: PessoaModel })
    public async criarPessoaFisica(@Body() pessoaModelParameter: PessoaModel) : Promise<PessoaModel> {
        return await this.pessoaService.criarPessoaFisica(pessoaModelParameter);
    }

    @Post("juridica")
    @ApiBody({ type: PessoaModel })
    public async criarPessoaJuridica(@Body() pessoaModelParameter: PessoaModel) : Promise<PessoaModel> {
        return await this.pessoaService.criarPessoaJuridica(pessoaModelParameter);
    }

    @Get()
    public async findAll() : Promise<PessoaModel[]> {
        return await this.pessoaService.findAll();
    }

    @Get("fisica")
    public async recuperarDadosPessoaFisica() : Promise<PessoaModel[]> {
        return await this.pessoaService.recuperarDadosPessoaFisica();
    }

    @Get("juridica")
    public async recuperarDadosPessoaJuridica() : Promise<PessoaModel[]> {
        return await this.pessoaService.recuperarDadosPessoaJuridica();
    }

    @Get("juridica/pagination")
    public recuperarDadosPessoaJuridicaPaginada(@Query("take") take: number = 1, @Query("skip") skip: number = 1) : Observable<PessoaModel[]> {
        return this.pessoaService.recuperarDadosPessoaJuridicaPaginada(take, skip);
    }

    @Delete(":codigoPessoa")
    public excluirPessoa(@Param("codigoPessoa") codigoPessoa: number) {
        return this.pessoaService.excluirPessoa(codigoPessoa);
    }

}

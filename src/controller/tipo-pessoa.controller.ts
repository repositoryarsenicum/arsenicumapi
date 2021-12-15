import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { TipoPessoaModel } from "../model/tipo-pessoa.model";
import { TipoPessoaService } from "../service/tipo-pessoa.service";

@Controller('tipo-pessoa')
export class TipoPessoaController {

    public constructor(
        private tipoPessoaService: TipoPessoaService
    ) {}

    @Post()
    @ApiBody({ type: TipoPessoaModel })
    public async save(@Body() tipoPessoaModelParameter: TipoPessoaModel) : Promise<TipoPessoaModel> {
        return await this.tipoPessoaService.save(tipoPessoaModelParameter);
    }

    @Get()
    public async findAll() : Promise<TipoPessoaModel[]> {
        return await this.tipoPessoaService.findAll();
    }

}

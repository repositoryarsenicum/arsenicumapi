import { Body, Controller, Get, Post } from '@nestjs/common';
import { TipoPessoaModel } from './../../model/tipo-pessoa-model';
import { TipoPessoaService } from './../../service/tipo-pessoa/tipo-pessoa.service';

@Controller('tipo-pessoa')
export class TipoPessoaController {

    public constructor(
        private tipoPessoaService: TipoPessoaService
    ) {}

    @Post()
    public save(@Body() tipoPessoaModelParameter: TipoPessoaModel) : TipoPessoaModel {
        return this.tipoPessoaService.save(tipoPessoaModelParameter);
    }

    @Get()
    public findAll() {
        return this.tipoPessoaService.findAll();
    }

}

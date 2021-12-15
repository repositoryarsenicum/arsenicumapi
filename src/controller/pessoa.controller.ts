import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { PessoaService } from "../service/pessoa.service";
import { PessoaModel } from "../model/pessoa.model";

@Controller('pessoa')
export class PessoaController {

    public constructor(
        private pessoaService: PessoaService
    ) {}

    @Post()
    @ApiBody({ type: PessoaModel })
    public async save(@Body() pessoaModelParameter: any) : Promise<PessoaModel> {
        return await this.pessoaService.save(pessoaModelParameter);
    }

    @Get()
    public async findAll() : Promise<PessoaModel[]> {
        return await this.pessoaService.findAll();
    }

}

import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { TipoDespesaService } from "../service/tipo-despesa.service";
import { TipoDespesaModel } from "../model/tipo-despesa.model";

@Controller('tipo-despesa')
export class TipoDespesaController {

    public constructor(
        private tipoDespesaService: TipoDespesaService
    ) {}

    @Post()
    @ApiBody({ type: TipoDespesaModel })
    public async save(@Body() tipoDespesaParameter: TipoDespesaModel) : Promise<TipoDespesaModel> {
        return await this.tipoDespesaService.save(tipoDespesaParameter);
    }

    @Get()
    public async findAll() : Promise<TipoDespesaModel[]> {
        return await this.tipoDespesaService.findAll();
    }

}

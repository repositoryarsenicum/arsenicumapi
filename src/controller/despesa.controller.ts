import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { DespesaModel } from "../model/despesa.model";
import { DespesaService } from "../service/despesa.service";

@Controller('despesa')
export class DespesaController {

    public constructor(
        private despesaService: DespesaService
    ) {}

    @Post()
    @ApiBody({ type: DespesaModel })
    public async save(@Body() despesaParameter: DespesaModel) : Promise<DespesaModel> {
        return await this.despesaService.save(despesaParameter);
    }

    @Get()
    public async findAll() : Promise<DespesaModel[]> {
        return await this.despesaService.findAll();
    }

}

import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { SituacaoPagamentoService } from "../service/situacao-pagamento.service";
import { SituacaoPagamentoModel } from "../model/situacao-pagamento.model";

@Controller('situacao-pagamento')
export class SituacaoPagamentoController {

    public constructor(
        private situacaoPagamentoService: SituacaoPagamentoService
    ) {}

    @Post()
    @ApiBody({ type: SituacaoPagamentoModel })
    public async save(@Body() situacaoPagamentoModelParameter: SituacaoPagamentoModel) : Promise<SituacaoPagamentoModel> {
        return await this.situacaoPagamentoService.save(situacaoPagamentoModelParameter);
    }

    @Get()
    public async findAll() : Promise<SituacaoPagamentoModel[]> {
        return await this.situacaoPagamentoService.findAll();
    }

}

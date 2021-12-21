import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SituacaoPagamentoController } from "../controller/sistuacao-pagamento.controller";
import { SituacaoPagamentoService } from "../service/situacao-pagamento.service";
import { SituacaoPagamentoModel } from "../model/situacao-pagamento.model";

@Module({
  imports: [TypeOrmModule.forFeature(([SituacaoPagamentoModel]))],
  controllers: [SituacaoPagamentoController],
  providers: [SituacaoPagamentoService],
  exports: [SituacaoPagamentoService]
})
export class SituacaoPagamentoModule {}

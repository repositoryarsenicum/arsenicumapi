import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TipoDespesaModel } from "../model/tipo-despesa.model";
import { TipoDespesaService } from "../service/tipo-despesa.service";
import { TipoDespesaController } from "../controller/tipo-despesa.controller";

@Module({
  imports: [TypeOrmModule.forFeature(([TipoDespesaModel]))],
  controllers: [TipoDespesaController],
  providers: [TipoDespesaService],
  exports: [TipoDespesaService]
})
export class TipoDespesaModule { }

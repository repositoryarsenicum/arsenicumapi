import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DespesaModel } from "../model/despesa.model";
import { DespesaService } from "../service/despesa.service";
import { DespesaController } from "../controller/despesa.controller";

@Module({
  imports: [TypeOrmModule.forFeature(([DespesaModel]))],
  controllers: [DespesaController],
  providers: [DespesaService],
  exports: [DespesaService]
})
export class DespesaModule { }

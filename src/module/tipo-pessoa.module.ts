import { Module } from "@nestjs/common";
import { TipoPessoaController } from "../controller/tipo-pessoa.controller";
import { TipoPessoaService } from "../service/tipo-pessoa.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TipoPessoaModel } from "../model/tipo-pessoa.model";

@Module({
  imports: [TypeOrmModule.forFeature(([TipoPessoaModel]))],
  controllers: [TipoPessoaController],
  providers: [TipoPessoaService],
})
export class TipoPessoaModule {}

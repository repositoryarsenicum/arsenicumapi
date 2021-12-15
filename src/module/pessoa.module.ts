import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PessoaController } from "../controller/pessoa.controller";
import { PessoaService } from "../service/pessoa.service";
import { PessoaModel } from "../model/pessoa.model";

@Module({
  imports: [TypeOrmModule.forFeature(([PessoaModel]))],
  controllers: [PessoaController],
  providers: [PessoaService],
})
export class PessoaModule {}

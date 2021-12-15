import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PessoaController } from "../controller/pessoa.controller";
import { PessoaService } from "../service/pessoa.service";
import { PessoaModel } from "../model/pessoa.model";
import { UsuarioModule } from "./usuario.module";
import { TipoPessoaModule } from "./tipo-pessoa.module";

@Module({
  imports: [TypeOrmModule.forFeature(([PessoaModel])), UsuarioModule, TipoPessoaModule],
  controllers: [PessoaController],
  providers: [PessoaService],
  exports: [PessoaService]
})
export class PessoaModule {}

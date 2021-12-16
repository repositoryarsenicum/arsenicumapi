import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PessoaController } from "../controller/pessoa.controller";
import { PessoaService } from "../service/pessoa.service";
import { PessoaModel } from "../model/pessoa.model";
import { UsuarioModule } from "./usuario.module";
import { TipoPessoaModule } from "./tipo-pessoa.module";
import { PerfilModule } from "./perfil.module";
import { TipoPessoaModel } from "../model/tipo-pessoa.model";

@Module({
  imports: [
    TypeOrmModule.forFeature(([PessoaModel, TipoPessoaModel])),
    UsuarioModule,
    TipoPessoaModule,
    PerfilModule],
  controllers: [PessoaController],
  providers: [PessoaService],
  exports: [PessoaService]
})
export class PessoaModule {}

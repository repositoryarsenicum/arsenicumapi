import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TipoPessoaModule } from "./module/tipo-pessoa.module";
import { DatabaseConnection } from "./connection/database.connection";
import { PessoaModule } from "./module/pessoa.module";
import { PerfilModule } from "./module/perfil.module";
import { UsuarioModule } from "./module/usuario.module";

@Module({
  imports: [DatabaseConnection, TipoPessoaModule, PessoaModule, PerfilModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

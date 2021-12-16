import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TipoPessoaModule } from "./module/tipo-pessoa.module";
import { PessoaModule } from "./module/pessoa.module";
import { PerfilModule } from "./module/perfil.module";
import { UsuarioModule } from "./module/usuario.module";
import { DatabaseMySQLConnection } from "./connection/database-mysql.connection";

@Module({
  imports: [
      DatabaseMySQLConnection,
      TipoPessoaModule,
      PessoaModule,
      PerfilModule,
      UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioModel } from "../model/usuario.model";
import { UsuarioController } from "../controller/usuario.controller";
import { UsuarioService } from "../service/usuario.service";

@Module({
  imports: [TypeOrmModule.forFeature(([UsuarioModel]))],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}

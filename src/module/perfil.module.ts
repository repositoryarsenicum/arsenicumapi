import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PerfilModel } from "../model/perfil.model";
import { PerfilController } from "../controller/perfil.controller";
import { PerfilService } from "../service/perfil.service";

@Module({
  imports: [TypeOrmModule.forFeature(([PerfilModel]))],
  controllers: [PerfilController],
  providers: [PerfilService],
  exports: [PerfilService]
})
export class PerfilModule {}

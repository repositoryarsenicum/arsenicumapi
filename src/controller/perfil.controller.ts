import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { PerfilService } from "../service/perfil.service";
import { PerfilModel } from "../model/perfil.model";

@Controller('perfil')
export class PerfilController {

    public constructor(
        private perfilService: PerfilService
    ) {}

    @Post()
    @ApiBody({ type: PerfilModel })
    public async save(@Body() perfilModelParameter: PerfilModel) : Promise<PerfilModel> {
        return await this.perfilService.save(perfilModelParameter);
    }

    @Get()
    public async findAll() : Promise<PerfilModel[]> {
        return await this.perfilService.findAll();
    }

}

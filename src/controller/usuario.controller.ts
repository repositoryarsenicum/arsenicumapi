import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { UsuarioService } from "../service/usuario.service";
import { UsuarioModel } from "../model/usuario.model";

@Controller('usuario')
export class UsuarioController {

    public constructor(
        private usuarioService: UsuarioService
    ) {}

    @Post()
    @ApiBody({ type: UsuarioModel })
    public async save(@Body() usuarioModelParameter: UsuarioModel) : Promise<UsuarioModel> {
        return await this.usuarioService.save(usuarioModelParameter);
    }

    @Get()
    public async findAll() : Promise<UsuarioModel[]> {
        return await this.usuarioService.findAll();
    }

}

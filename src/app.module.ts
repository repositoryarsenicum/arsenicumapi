import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoPessoaService } from './service/tipo-pessoa/tipo-pessoa.service';
import { TipoPessoaController } from './controller/tipo-pessoa/tipo-pessoa.controller';

@Module({
  imports: [],
  controllers: [AppController, TipoPessoaController],
  providers: [AppService, TipoPessoaService],
})
export class AppModule {}

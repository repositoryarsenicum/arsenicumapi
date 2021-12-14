import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'ARSENICUM - Sistema de Gestao Financeira';
  }

}

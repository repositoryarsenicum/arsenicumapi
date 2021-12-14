import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return `ARSENICUM-${this.retornarDataFormatoAAAAMMDDHHMMSS()}`;
  }

  private retornarDataFormatoAAAAMMDDHHMMSS(): string {
    const data: Date = new Date();
    const ano: string = data.getFullYear().toString().padStart(2,"0");
    const mes: string = (data.getMonth()+1).toString().padStart(2,"0");
    const dia: string = (data.getDate()).toString().padStart(2,"0");
    const hora: string = data.getHours().toString();
    const minuto: string = data.getMinutes().toString();
    const segundo: string = data.getSeconds().toString();
    return ano+mes+dia+hora+minuto+segundo;
  }

}

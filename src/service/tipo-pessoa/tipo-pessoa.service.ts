import { Injectable } from '@nestjs/common';
import { TipoPessoaModel } from './../../model/tipo-pessoa-model';

@Injectable()
export class TipoPessoaService {

    public constructor(
        
    ) {}

    public save(tipoPessoaModelParameter: TipoPessoaModel) : TipoPessoaModel {
        return tipoPessoaModelParameter;
    }

    public findAll() {
        return "Tipo Pessoa....";
    }

}

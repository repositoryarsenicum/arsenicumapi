-- Projeto

    npm install global @nestjs/cli
    nest new arsenicumapi

    nest generate class model/tipo-pessoa-model --no-spec

    nest generate service service/tipo-pessoa --no-spec

    nest generate controller controller/tipo-pessoa --no-spec

    nest generate class module/tipo-pessoa-module --no-spec

-- Dependências

    npm install class-validator class-transformer
    npm install @nestjs/mapped-types
    npm install typeorm @nestjs/typeorm
    npm install pg
# Projeto

    npm install global @nestjs/cli
    nest new arsenicumapi

    nest generate class model/tipo-pessoa-model --no-spec

    nest generate service service/tipo-pessoa --no-spec

    nest generate controller controller/tipo-pessoa --no-spec

    nest generate class module/tipo-pessoa-module --no-spec

# Dependências

    npm install class-validator class-transformer
    npm install @nestjs/mapped-types
    npm install typeorm @nestjs/typeorm
    npm install pg
    npm install --save @nestjs/swagger swagger-ui-express

    -- Email
    npm i --save @anchan828/nest-sendgrid

    -- Usar arquivo ENV
    npm i --save @nestjs/config

    npm install bcrypt --save

    -- Instalar apos erro: "https://github.com/typeorm/typeorm/issues/4122"
    npm install mysql

    -- Instalar MySQL
    brew install mysql
    sudo chown $USER /usr/local/bin/brew
    mysql.server start

    mysql -u root -p
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'arsenicum';
    FLUSH PRIVILEGES;

    -- Migrations

        -- Gerar nova build
        npm run build

        -- Criar
        npx typeorm migration:create -n CriarTabelaTipoPessoa

        -- Executar
        npx typeorm migration:run

# Links

    -- Envio de E-mail
    https://sendgrid.com

    -- Documentação
    localhost:3000/api/
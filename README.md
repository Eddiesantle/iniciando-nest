# Aplicação com Nest.js 9

https://www.youtube.com/watch?v=1yu9084sVjs

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Criar ambiente docker

Criar arquivo docker-compose.yml

```docker-compose.yml
version: '3'

services:
  app:
    build: .
    ports:
      - 8000:3000
    volumes:
      - .:/home/node/app
```

Criar arquivo Dockerfile

```Dockerfile
FROM node:16.16.0-slim

USER node

WORKDIR /home/node/app

CMD [ "/home/node/app/start.sh" ]
```

Criar arquivo star.sh

```star.sh
#!/bin/bash

tail -f /dev/null

#npm start
```

## gerar aplicação

Instalar nestjs:
npm install -g @nestjs/cli

```Dockerfile

FROM node:16.16.0-slim

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

CMD [ "/home/node/app/start.sh" ]

```

Criar arquivo star.sh

```star.sh
#!/bin/bash

npm install

#npm run start:dev

tail -f /dev/null
```

```bash
docker compose up --build -d
```

## Iniciar projeto nest

```bash
docker compose exec app bash
```

Voltar uma pasta

```bash
cd ../
```

Iniciar projeto com o mesmo nome

```bash
nest new app
```

Processo de iniciar projeto:

- Which package manager would you ❤️ to use? >npm

Entrar no arquivo do projeto

```bash
cd app
```

## rodar projeto nest

Rodar projeto

```bash
npm run start:dev
```

## Subir - git github do projeto

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "first commit"
```

## Subir - docker hub

Cria imagem no Dockerhub

```bash
docker build -t eddiedevdocker/minha-imagem-nestjs-prod -f Dockerfile .
```

Subir imagem no dockehub

```bash
docker push eddiedevdocker/minha-imagem-nestjs-prod
```

# Iniciado Nest.js 9

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="Nest.js - Arquitetura da aplicação@1.25x.png" width="200" alt="Nest Logo" /></a>
</p>

## Gerar modulo

```node
nest generate module bank-accounts
```

Criar um controller dentro do modulo bank-accounts

```node
nest generate controller bank-accounts/test
```

## Gerar nest g resource

Já cria uma estrutura com GET, POST, PATCH, DELETE

```node
nest g resource
```

```node
What name would you like to use for this resource (plural, e.g.,
"users")?
bank-accounts
```

```node
What transport layer do you use? (Use arrow keys)
❯ REST API
  GraphQL (code first)
  GraphQL (schema first)
  Microservice (non-HTTP)
  WebSockets
```

```node
Would you like to generate CRUD entry points? (Y/n)
Y
```

```node
CREATE src/bank-accounts/bank-accounts.controller.spec.ts (638 bytes)
CREATE src/bank-accounts/bank-accounts.controller.ts (1045 bytes)
CREATE src/bank-accounts/bank-accounts.module.ts (298 bytes)
CREATE src/bank-accounts/bank-accounts.service.spec.ts (503 bytes)
CREATE src/bank-accounts/bank-accounts.service.ts (709 bytes)
CREATE src/bank-accounts/dto/create-bank-account.dto.ts (37 bytes)
CREATE src/bank-accounts/dto/update-bank-account.dto.ts (198 bytes)
CREATE src/bank-accounts/entities/bank-account.entity.ts (28 bytes)
```

## Banco de dados

[NestSQL(TypeORM)]https://docs.nestjs.com/recipes/sql-typeorm

```node
npm install typeorm sqlite3 @nestjs/typeorm
```

Arquivo que faz a relação com o banco de dados:
src/bank-accounts/entities/bank-account.entity.ts

```bank-account.entity.ts
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class BankAccount {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'decimal', scale:2})
    balance: number;

    @Column({length:'255'})
    account_number: string;
}

```

integrar com app.module.ts modulo pai e conectar com banco
```app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankAccountsModule } from './bank-accounts/bank-accounts.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BankAccount } from './bank-accounts/entities/bank-account.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: __dirname + 'db.sqlite',
      synchronize: true,
      logging: true,
      entities:[BankAccount]
    })
    ,BankAccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

usar com bank-accounts.module.ts modulo filho registra somente as entidades que vai trabalhar
```bank-accounts.module.ts
import { Module } from '@nestjs/common';
import { BankAccountsService } from './bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BankAccount } from './entities/bank-account.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([BankAccount])
  ],
  controllers: [BankAccountsController],
  providers: [BankAccountsService]
})
export class BankAccountsModule {}

```

## Operações e regras de negocios na camada de serviço

bank-accounts.service.ts
```bank-accounts.service.ts
constructor(
    @InjectRepository(BankAccount)
    private repo: Repository<BankAccount>,
  ) {}
```
Entidade que modela os dados
// repository - salva, pegar, exclui
// @InjectRepository - focado na entidade

Criar instancia no banco de dados
```bank-accounts.service.ts
async create(createBankAccountDto: CreateBankAccountDto) {
    const bankAccount = this.repo.create({
      account_number: createBankAccountDto.account_number,
      balance: 0
    })

    await this.repo.insert(bankAccount)

    return bankAccount
  }
```

# Nest.js com Domain Driven Design (DDD)
F
## O que temos dentro de um banco?

Dominio bancario

Linguagem Ubiqua:
- Contas bancarias
- Depósito
- Saque
- Extrato das transações

Modelo:
Conta bancaria(saldo, n° da conta) ---> Deposito ---> Conta bancaria(saldo, n° da conta)
Conta bancaria(saldo, n° da conta) ---> Teminal ---> Saque

Criar pasta para Dominio DDD - Com o minimo de interferencia/framework externa 

Declarar as operações
src/@core/domain/bank-account.ts
```bank-account.ts
export class BankAccount {
  id: string;

  balance: number;

  account_number: string;

  constructor(id: string, balance, number, account_number: string) {
    this.id = id;
    this.balance = balance;
    this.account_number = account_number;
  }
}
```
## realizar testes - Jest Runner

arquivo de teste:
src/@core/domain/bank-account.spec.ts
```bank-account.spec.ts
import { BankAccount } from "./bank-account";

describe('BankAccount Unit Tests', () => {
  it('shouldd create a bank account', () => {
    const bankAccount = new BankAccount('123', 100, '12345');
    expect(bankAccount.id).toBe('100');
    expect(bankAccount.balance).toBe(100);
    expect(bankAccount.account_number).toBe('12345');
  });
});
```

intalar extenção: Jest Runner

Testar toda aplicação
```node
npm run test --
```

Testar arquivo selecionado
npm run test -- [DIRETORIO_ARQUIVO]
```node
npm run test -- src/@core/domain/bank-account.spec.ts    
```

## Necessidade de aplicação

coordenar as operação que deve fazer

// DDD - ID auto incrementado 

src/@core/bank-account-service.ts
```bank-account-service.ts
import { BankAccount } from './domain/bank-account';

export class BankAccountService { // application Service

constructor(private bankAccountRepo: BankAccountRepository){}

  create(account_number: string) {
    const bankAccount = new BankAccount('123', 0, account_number);
    this.bankAccountRepo.insert(bankAccount)
    return bankAccount;
  }
}

```

## interface para não ficar preso ao banco

src/@core/domain/bank-account.repository.ts
```bank-account-service.ts
import { BankAccount } from "./bank-account";

export interface BankAccountRepository{
    insert(bankAccount: BankAccount): Promise<void>
}

```

## infra - preocupação tecnica

Criar
src/@core/infra
src/@core/infra/db
src/@core/infra/db/bank-account-typeorm.repository.ts

```
import { Repository } from 'typeorm';
import { BankAccount } from 'src/@core/domain/bank-account';
import { BankAccountRepository } from 'src/@core/domain/bank-account.repository';
import { BankAccountTypeOrm } from 'src/bank-accounts/entities/bank-account.entity';

export class BankAccountTypeOrmRepository implements BankAccountRepository {
  constructor(private ormRepo: Repository<BankAccountTypeOrm>) {}

  async insert(bankAccount: BankAccount): Promise<void> {
    const model = this.ormRepo.create(bankAccount);
    await this.ormRepo.save(model);
    throw new Error('Method not implemented');
  }
}

```

// repositorio DDD - lida com a representação da entidade do DDD
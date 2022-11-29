import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnexosService } from './anexos.service';
import { AnexosController } from './anexos.controller';
import { MulterModule } from '@nestjs/platform-express';
import config from '../config/configurations';

@Module({
  controllers: [AnexosController],
  providers: [AnexosService],
  imports:[
    ConfigModule.forRoot({load: [config]}),
    MulterModule.register({dest: './uploads'})
  ]
})
export class AnexosModule {}

import { Module } from '@nestjs/common';
import { AnexosService } from './anexos.service';
import { AnexosController } from './anexos.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [AnexosController],
  providers: [AnexosService],
  imports:[
    MulterModule.register({dest: './uploads'})
  ]
})
export class AnexosModule {}

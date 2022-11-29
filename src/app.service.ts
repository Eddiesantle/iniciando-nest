import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World - API SOULTECH EM NESTJS - A melhor do mundo!';
  }
}

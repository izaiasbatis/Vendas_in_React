import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Iniciando projeto em React para vendas On-lines!';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsultationsService {
  getHello(): string {
    return 'Hello World!';
  }
}

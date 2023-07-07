import { Injectable } from '@nestjs/common';

@Injectable()
export class AppAdminService {
  getHello(): string {
    return 'Hello World!';
  }
}

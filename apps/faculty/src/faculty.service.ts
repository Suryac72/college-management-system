import { Injectable } from '@nestjs/common';

@Injectable()
export class FacultyService {
  getHello(): string {
    return 'Hello World!';
  }
}

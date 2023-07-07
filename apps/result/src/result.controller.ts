import { Controller, Get } from '@nestjs/common';
import { ResultService } from './result.service';

@Controller()
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Get()
  getHello(): string {
    return this.resultService.getHello();
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppAdminService } from './app-admin.service';

@Controller()
export class AppAdminController {
  constructor(private readonly appAdminService: AppAdminService) {}

  @Get()
  getHello(): string {
    return this.appAdminService.getHello();
  }
}

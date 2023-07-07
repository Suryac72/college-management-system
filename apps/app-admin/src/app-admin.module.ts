import { Module } from '@nestjs/common';
import { AppAdminController } from './app-admin.controller';
import { AppAdminService } from './app-admin.service';

@Module({
  imports: [],
  controllers: [AppAdminController],
  providers: [AppAdminService],
})
export class AppAdminModule {}

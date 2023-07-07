import { Test, TestingModule } from '@nestjs/testing';
import { AppAdminController } from './app-admin.controller';
import { AppAdminService } from './app-admin.service';

describe('AppAdminController', () => {
  let appAdminController: AppAdminController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppAdminController],
      providers: [AppAdminService],
    }).compile();

    appAdminController = app.get<AppAdminController>(AppAdminController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appAdminController.getHello()).toBe('Hello World!');
    });
  });
});

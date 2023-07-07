import { Test, TestingModule } from '@nestjs/testing';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';

describe('ResultController', () => {
  let resultController: ResultController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ResultController],
      providers: [ResultService],
    }).compile();

    resultController = app.get<ResultController>(ResultController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(resultController.getHello()).toBe('Hello World!');
    });
  });
});

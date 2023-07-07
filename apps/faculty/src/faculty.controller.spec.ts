import { Test, TestingModule } from '@nestjs/testing';
import { FacultyController } from './faculty.controller';
import { FacultyService } from './faculty.service';

describe('FacultyController', () => {
  let facultyController: FacultyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FacultyController],
      providers: [FacultyService],
    }).compile();

    facultyController = app.get<FacultyController>(FacultyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(facultyController.getHello()).toBe('Hello World!');
    });
  });
});

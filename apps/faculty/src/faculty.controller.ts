import { Controller, Get } from '@nestjs/common';
import { FacultyService } from './faculty.service';

@Controller()
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Get()
  getHello(): string {
    return this.facultyService.getHello();
  }
}

import { Controller, Get } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';

@Controller()
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Get()
  getHello(): string {
    return this.laboratoryService.getHello();
  }
}

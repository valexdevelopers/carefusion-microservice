import { Test, TestingModule } from '@nestjs/testing';
import { ConsultationsController } from './consultations.controller';
import { ConsultationsService } from './consultations.service';

describe('ConsultationsController', () => {
  let consultationsController: ConsultationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConsultationsController],
      providers: [ConsultationsService],
    }).compile();

    consultationsController = app.get<ConsultationsController>(ConsultationsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(consultationsController.getHello()).toBe('Hello World!');
    });
  });
});

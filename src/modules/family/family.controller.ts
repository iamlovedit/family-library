import { Controller, Get } from '@nestjs/common';
import { ControllerBase } from 'src/infrastructure/controller.base';

@Controller('family')
export class FamilyController extends ControllerBase {
  @Get()
  hello(): string {
    return 'Hello family';
  }
}

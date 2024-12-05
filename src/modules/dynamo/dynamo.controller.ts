import { Controller, Get } from '@nestjs/common';
import { Message, MessageData } from 'src/infrastructure';
import { ControllerBase } from 'src/infrastructure/controller';

@Controller('dynamo')
export class DynamoController extends ControllerBase {
  @Get()
  hello(): string {
    return 'Hello dynamo';
  }

  @Get('test')
  test(): Message {
    return this.succeed();
  }

  @Get('fail')
  fail(): MessageData<number> {
    return this.failedData<number>();
  }
}
import { Module } from '@nestjs/common';
import { DynamoController } from './dynamo.controller';

@Module({
  controllers: [DynamoController],
  providers: [],
  imports: [],
})
export class DynamoModule {}

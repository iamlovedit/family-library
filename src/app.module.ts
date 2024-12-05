import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamoModule } from './modules/dynamo/dynamo.module';
import { FamilyModule } from './modules/family/family.module';

@Module({
  imports: [DynamoModule, FamilyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

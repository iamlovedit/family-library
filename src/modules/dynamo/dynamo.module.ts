import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamoController } from './dynamo.controller';
import { DynamoPackage } from './entities/dynamo.package';
import { PackageService } from './dynamo.service';

@Module({
  controllers: [DynamoController],
  providers: [PackageService],
  imports: [TypeOrmModule.forFeature([DynamoPackage])],
})
export class DynamoModule {}

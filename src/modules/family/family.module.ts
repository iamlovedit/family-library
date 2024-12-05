import { Module } from '@nestjs/common';
import { FamilyController } from './family.controller';

@Module({
  controllers: [FamilyController],
  providers: [],
})
export class FamilyModule {}

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { DynamoPackage } from './entities/dynamo.package';

@Injectable()
export class PackageService {
  constructor(
    @InjectRepository(DynamoPackage)
    private packageRepository: Repository<DynamoPackage>,
  ) {}
}

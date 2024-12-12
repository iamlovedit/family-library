import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DynamoPackage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

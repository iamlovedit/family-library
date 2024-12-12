import { Column } from 'typeorm';

export class EntityBase {
  @Column({
    type: 'timestamp',
  })
  createDate: Date;
}

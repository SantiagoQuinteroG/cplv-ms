import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { EntryEntity } from './entries.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  orderId: number;

  @OneToMany(() => EntryEntity, (entry) => entry.order)
  entries: EntryEntity[];

  @OneToOne(() => UserEntity, (user) => user.userId)
  @JoinColumn()
  userId: UserEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from '../../products/entities/product.entity';
import { OrderEntity } from './orders.entity';

@Entity('entries')
export class EntryEntity {
  @PrimaryGeneratedColumn()
  entryId: number;

  @ManyToOne(() => OrderEntity, (order) => order.entries)
  order: OrderEntity;

  @OneToOne(() => ProductEntity, (product) => product.productId)
  @JoinColumn()
  productId: ProductEntity;

  @Column()
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

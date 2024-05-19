import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryEntity } from './entities/entries.entity';
import { OrderEntity } from './entities/orders.entity';
import { ProductEntity } from '../products/entities/product.entity';
import { UserEntity } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EntryEntity,
      OrderEntity,
      ProductEntity,
      UserEntity,
    ]),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}

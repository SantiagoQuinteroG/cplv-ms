import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteEntity } from './entities/route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RouteEntity])],
  controllers: [RoutesController],
  providers: [RoutesService],
})
export class RoutesModule {}

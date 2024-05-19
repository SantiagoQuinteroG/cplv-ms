import { Module } from '@nestjs/common';
import { TypedocsService } from './typedocs.service';
import { TypedocsController } from './typedocs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypedocEntity } from './entities/typedoc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypedocEntity])],
  controllers: [TypedocsController],
  providers: [TypedocsService],
})
export class TypedocsModule {}

import { Module } from '@nestjs/common';
import { TypedocsService } from './typedocs.service';
import { TypedocsController } from './typedocs.controller';

@Module({
  controllers: [TypedocsController],
  providers: [TypedocsService],
})
export class TypedocsModule {}

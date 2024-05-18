import { Module } from '@nestjs/common';
import { RunnersService } from './runners.service';
import { RunnersController } from './runners.controller';

@Module({
  controllers: [RunnersController],
  providers: [RunnersService],
})
export class RunnersModule {}

import { Module } from '@nestjs/common';
import { RunnersService } from './runners.service';
import { RunnersController } from './runners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RunnerEntity } from './entities/runner.entity';
import { UserEntity } from '../users/entities/user.entity';
import { TypedocEntity } from '../typedocs/entities/typedoc.entity';
import { TeamEntity } from '../teams/entities/team.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RunnerEntity,
      UserEntity,
      TypedocEntity,
      TeamEntity,
    ]),
  ],
  controllers: [RunnersController],
  providers: [RunnersService],
})
export class RunnersModule {}

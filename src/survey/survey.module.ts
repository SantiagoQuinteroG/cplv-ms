import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyEntity } from './entities/survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyEntity])],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}

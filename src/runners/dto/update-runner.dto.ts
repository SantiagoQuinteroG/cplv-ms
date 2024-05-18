import { PartialType } from '@nestjs/mapped-types';
import { CreateRunnerDto } from './create-runner.dto';

export class UpdateRunnerDto extends PartialType(CreateRunnerDto) {}

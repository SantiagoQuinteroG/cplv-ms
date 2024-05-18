import { Injectable } from '@nestjs/common';
import { CreateRunnerDto } from './dto/create-runner.dto';
import { UpdateRunnerDto } from './dto/update-runner.dto';

@Injectable()
export class RunnersService {
  create(createRunnerDto: CreateRunnerDto) {
    return 'This action adds a new runner';
  }

  findAll() {
    return `This action returns all runners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} runner`;
  }

  update(id: number, updateRunnerDto: UpdateRunnerDto) {
    return `This action updates a #${id} runner`;
  }

  remove(id: number) {
    return `This action removes a #${id} runner`;
  }
}

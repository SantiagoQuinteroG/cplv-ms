import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRunnerDto } from './dto/create-runner.dto';
import { UpdateRunnerDto } from './dto/update-runner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RunnerEntity } from './entities/runner.entity';
import { UserEntity } from '../users/entities/user.entity';
import { TeamEntity } from '../teams/entities/team.entity';
import { TypedocEntity } from '../typedocs/entities/typedoc.entity';

@Injectable()
export class RunnersService {
  constructor(
    @InjectRepository(RunnerEntity)
    private readonly runnerRepository: Repository<RunnerEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(TeamEntity)
    private readonly teamRepository: Repository<TeamEntity>,
    @InjectRepository(TypedocEntity)
    private readonly typedocRepository: Repository<TypedocEntity>,
  ) {}

  async createRunnerNoTeam(
    userId: string,
    typeId: number,
    createRunnerDto: CreateRunnerDto,
  ) {
    const userFound = await this.userRepository.findOne({
      where: { userId },
    });

    if (!userFound) {
      throw new NotFoundException();
    }

    const typedocFound = await this.typedocRepository.findOne({
      where: { typeId },
    });

    if (!typedocFound) {
      throw new NotFoundException();
    }

    const newRunner = this.runnerRepository.create(createRunnerDto);
    const savedRunner = await this.runnerRepository.save(newRunner);
    savedRunner.userId = userFound;
    savedRunner.typedoc = typedocFound;

    return this.runnerRepository.save(savedRunner);
  }

  async createRunnerWithTeam(
    userId: string,
    typeId: number,
    teamId: number,
    createRunnerDto: CreateRunnerDto,
  ) {
    const userFound = await this.userRepository.findOne({
      where: { userId },
    });

    if (!userFound) {
      throw new NotFoundException();
    }

    const typedocFound = await this.typedocRepository.findOne({
      where: { typeId },
    });

    if (!typedocFound) {
      throw new NotFoundException();
    }

    const teamFound = await this.teamRepository.findOne({
      where: { teamId },
    });

    if (!teamFound) {
      throw new NotFoundException();
    }

    const newRunner = this.runnerRepository.create(createRunnerDto);
    const savedRunner = await this.runnerRepository.save(newRunner);
    savedRunner.userId = userFound;
    savedRunner.typedoc = typedocFound;
    savedRunner.team = teamFound;

    return this.runnerRepository.save(savedRunner);
  }

  findAllRunner() {
    return this.runnerRepository.find({
      relations: ['userId', 'typedoc', 'team'],
    });
  }

  findOneRunner(runnerId: number) {
    return this.runnerRepository.findOne({
      where: { runnerId },
      relations: ['userId', 'typedoc', 'team'],
    });
  }

  updateRunner(id: number, updateRunnerDto: UpdateRunnerDto) {
    return `This action updates a #${id} runner`;
  }

  removeRunner(id: number) {
    return this.runnerRepository.delete(id);
  }
}

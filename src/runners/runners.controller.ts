import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RunnersService } from './runners.service';
import { CreateRunnerDto } from './dto/create-runner.dto';
import { UpdateRunnerDto } from './dto/update-runner.dto';

@Controller('runners')
export class RunnersController {
  constructor(private readonly runnersService: RunnersService) {}

  @Post(':userId/:typeId')
  createRunnerNoTeam(
    @Param('userId') userId: string,
    @Param('typeId') typeId: string,
    @Body() createRunnerDto: CreateRunnerDto,
  ) {
    return this.runnersService.createRunnerNoTeam(
      userId,
      +typeId,
      createRunnerDto,
    );
  }

  @Post(':userId/:typeId/:teamId')
  createRunnerWithTeam(
    @Param('userId') userId: string,
    @Param('typeId') typeId: string,
    @Param('teamId') teamId: string,
    @Body() createRunnerDto: CreateRunnerDto,
  ) {
    return this.runnersService.createRunnerWithTeam(
      userId,
      +typeId,
      +teamId,
      createRunnerDto,
    );
  }

  @Get()
  findAllRunner() {
    return this.runnersService.findAllRunner();
  }

  @Get(':id')
  findOneRunner(@Param('id') id: string) {
    return this.runnersService.findOneRunner(+id);
  }

  @Patch(':id')
  updateRunner(
    @Param('id') id: string,
    @Body() updateRunnerDto: UpdateRunnerDto,
  ) {
    return this.runnersService.updateRunner(+id, updateRunnerDto);
  }

  @Delete(':id')
  removeRunner(@Param('id') id: string) {
    return this.runnersService.removeRunner(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RunnersService } from './runners.service';
import { CreateRunnerDto } from './dto/create-runner.dto';
import { UpdateRunnerDto } from './dto/update-runner.dto';

@Controller('runners')
export class RunnersController {
  constructor(private readonly runnersService: RunnersService) {}

  @Post()
  create(@Body() createRunnerDto: CreateRunnerDto) {
    return this.runnersService.create(createRunnerDto);
  }

  @Get()
  findAll() {
    return this.runnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.runnersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRunnerDto: UpdateRunnerDto) {
    return this.runnersService.update(+id, updateRunnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.runnersService.remove(+id);
  }
}

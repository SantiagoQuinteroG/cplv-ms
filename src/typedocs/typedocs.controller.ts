import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypedocsService } from './typedocs.service';
import { CreateTypedocDto } from './dto/create-typedoc.dto';
import { UpdateTypedocDto } from './dto/update-typedoc.dto';

@Controller('typedocs')
export class TypedocsController {
  constructor(private readonly typedocsService: TypedocsService) {}

  @Post()
  create(@Body() createTypedocDto: CreateTypedocDto) {
    return this.typedocsService.create(createTypedocDto);
  }

  @Get()
  findAll() {
    return this.typedocsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typedocsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypedocDto: UpdateTypedocDto) {
    return this.typedocsService.update(+id, updateTypedocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typedocsService.remove(+id);
  }
}

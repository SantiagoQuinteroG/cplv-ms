import { Injectable } from '@nestjs/common';
import { CreateTypedocDto } from './dto/create-typedoc.dto';
import { UpdateTypedocDto } from './dto/update-typedoc.dto';

@Injectable()
export class TypedocsService {
  create(createTypedocDto: CreateTypedocDto) {
    return 'This action adds a new typedoc';
  }

  findAll() {
    return `This action returns all typedocs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typedoc`;
  }

  update(id: number, updateTypedocDto: UpdateTypedocDto) {
    return `This action updates a #${id} typedoc`;
  }

  remove(id: number) {
    return `This action removes a #${id} typedoc`;
  }
}

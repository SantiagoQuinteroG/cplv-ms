import { PartialType } from '@nestjs/mapped-types';
import { CreateTypedocDto } from './create-typedoc.dto';

export class UpdateTypedocDto extends PartialType(CreateTypedocDto) {}

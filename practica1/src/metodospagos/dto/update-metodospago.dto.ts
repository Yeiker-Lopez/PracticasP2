import { PartialType } from '@nestjs/mapped-types';
import { CreateMetodospagoDto } from './create-metodospago.dto';

export class UpdateMetodospagoDto extends PartialType(CreateMetodospagoDto) {}

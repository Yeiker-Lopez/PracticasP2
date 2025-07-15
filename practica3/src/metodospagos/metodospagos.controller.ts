import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetodospagosService } from './metodospagos.service';
import { CreateMetodospagoDto } from './dto/create-metodospago.dto';
import { UpdateMetodospagoDto } from './dto/update-metodospago.dto';

@Controller('metodospagos')
export class MetodospagosController {
  constructor(private readonly metodospagosService: MetodospagosService) {}

  @Post()
  create(@Body() createMetodospagoDto: CreateMetodospagoDto) {
    return this.metodospagosService.create(createMetodospagoDto);
  }

  @Get()
  findAll() {
    return this.metodospagosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metodospagosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetodospagoDto: UpdateMetodospagoDto) {
    return this.metodospagosService.update(+id, updateMetodospagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metodospagosService.remove(+id);
  }
}

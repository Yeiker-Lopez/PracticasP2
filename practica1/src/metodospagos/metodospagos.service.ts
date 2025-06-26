import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMetodospagoDto } from './dto/create-metodospago.dto';
import { UpdateMetodospagoDto } from './dto/update-metodospago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Metodospago } from './entities/metodospago.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetodospagosService {

  constructor(

    @InjectRepository(Metodospago)
    private readonly metodospagoRepository: Repository<Metodospago>,

  ) {}

  create(createMetodospagoDto: CreateMetodospagoDto) {
    const metodospago = this.metodospagoRepository.create(createMetodospagoDto);
    return this.metodospagoRepository.save(metodospago);
  }

  findAll() {
    return this.metodospagoRepository.find();
  }

  findOne(id: number) {
    return this.metodospagoRepository.findOne({ where: { id } });
  }

  update(id: number, updateMetodospagoDto: UpdateMetodospagoDto) {
    const metodospago = this.metodospagoRepository.create(updateMetodospagoDto);
    return this.metodospagoRepository.update(id, metodospago);
  }

  async remove(id: number) {
    const metodospago = await this.findOne(id);
    if (!metodospago) {
      throw new NotFoundException(`metodo de pago no encontrado`);
    }
    metodospago.estado = false;
    return this.metodospagoRepository.save(metodospago);
  }
}

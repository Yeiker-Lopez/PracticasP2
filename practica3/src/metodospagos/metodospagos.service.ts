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

  async create(createMetodospagoDto: CreateMetodospagoDto): Promise<Metodospago> {
    const metodospago = this.metodospagoRepository.create(createMetodospagoDto);
    return await this.metodospagoRepository.save(metodospago);
  }

  async findAll(): Promise<Metodospago[]> {
    return await this.metodospagoRepository.find();
  }

  async findOne(id: number): Promise<Metodospago> {
    const metodospago = await this.metodospagoRepository.findOne({ where: { id } });
    if (!metodospago) {
      throw new NotFoundException(`Método de pago con id ${id} no encontrado`);
    }
    return metodospago;
  }

  async update(id: number, updateMetodospagoDto: UpdateMetodospagoDto): Promise<Metodospago> {
    await this.metodospagoRepository.update(id, updateMetodospagoDto);
    const metodospago = await this.findOne(id);
    return metodospago;
  }

  async remove(id: number): Promise<void> { 
    console.log(`[MetodospagosService] Intentando eliminar permanentemente método de pago con ID: ${id}`);
    const result = await this.metodospagoRepository.delete(id); 

    if (result.affected === 0) {
      console.warn(`[MetodospagosService] Método de pago con ID ${id} no encontrado para eliminar.`);
      throw new NotFoundException(`Método de pago con ID ${id} no encontrado.`);
    }
    console.log(`[MetodospagosService] Método de pago con ID ${id} eliminado exitosamente. Filas afectadas: ${result.affected}`);
  }
}
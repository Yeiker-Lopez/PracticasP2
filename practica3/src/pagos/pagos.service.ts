import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PagosService {
  constructor(
    @InjectRepository(Pago)
    private readonly pagoRepository: Repository<Pago>,
  ) {}

  async create(createPagoDto: CreatePagoDto): Promise<Pago> {
    const pago = this.pagoRepository.create(createPagoDto);
    return await this.pagoRepository.save(pago);
  }

  async findAll(): Promise<Pago[]> {
    return await this.pagoRepository.find();
  }

  async findOne(id: number): Promise<Pago> {
    const pago = await this.pagoRepository.findOne({ where: { id } });
    if (!pago) {
      throw new NotFoundException(`Pago con id ${id} no encontrado`);
    }
    return pago;
  }

  async update(id: number, updatePagoDto: UpdatePagoDto): Promise<Pago> {
    await this.pagoRepository.update(id, updatePagoDto);
    const pago = await this.findOne(id);
    return pago;
  }

  async remove(id: number): Promise<void> { 
    console.log(`[PagosService] Intentando eliminar permanentemente pago con ID: ${id}`);
    const result = await this.pagoRepository.delete(id); 

    if (result.affected === 0) {
      console.warn(`[PagosService] Pago con ID ${id} no encontrado para eliminar.`);
      throw new NotFoundException(`Pago con ID ${id} no encontrado.`);
    }
    console.log(`[PagosService] Pago con ID ${id} eliminado exitosamente. Filas afectadas: ${result.affected}`);
  }
}
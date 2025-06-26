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
  )
  {}

  create(createPagoDto: CreatePagoDto) {
    const pago = this.pagoRepository.create(createPagoDto);
    return this.pagoRepository.save(pago);
  }

  findAll() {
    return this.pagoRepository.find();
  }

  findOne(id: number) {
    return this.pagoRepository.findOne({ where: { id } });
  }

  update(id: number, updatePagoDto: UpdatePagoDto) {
    const pago = this.pagoRepository.create(updatePagoDto);
    return this.pagoRepository.update(id, pago)
  }

  async remove(id: number) {
    const pago = await this.findOne(id);
    if (!pago) {
      throw new NotFoundException(`pago no encontrado`);
    }
    pago.estado = false;
    return this.pagoRepository.save(pago);
  }
}

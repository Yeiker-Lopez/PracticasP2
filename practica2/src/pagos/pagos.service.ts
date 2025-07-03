import { Injectable } from '@nestjs/common';
import { CreatePagoInput } from './dto/create-pago.input';
import { UpdatePagoInput } from './dto/update-pago.input';
import { Pago } from './entities/pago.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PagosService {

    constructor(
      @InjectRepository(Pago)
      private readonly pagosRepository: Repository<Pago> 
    ) {
    }


  async create(createPagoInput: CreatePagoInput):Promise<Pago> {

    const created = this.pagosRepository.create(createPagoInput);
    return await this.pagosRepository.save(created); 

  }

  async findAll():Promise<Pago[]> {
    return await this.pagosRepository.find();
  }

  async findOne(id: string): Promise<Pago> {
    const pago = await this.pagosRepository.findOneBy({ id });
    if (!pago) {
      throw new Error(`pago no encontrado`);
    }
    return pago;
  }

  async update(id: string, updatePagoInput: UpdatePagoInput):Promise<Pago> {
    const { id: _id, ...rest } = updatePagoInput;
    const updated = await this.pagosRepository.preload({
      id,
      ...rest,
    });
    if (!updated) {
      throw new Error(`pago no encontrado`);
    }
    return await this.pagosRepository.save(updated);
  }

  async remove(id: string):Promise<Pago> {
    const removed = await this.pagosRepository.findOne({ where: { id } });
    if (!removed) {
      throw new Error(`pago no encontrado`);
    }
    await this.pagosRepository.remove(removed);
    return {...removed, id};
  }
}
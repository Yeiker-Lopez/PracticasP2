import { Injectable } from '@nestjs/common';
import { CreateMetodospagoInput } from './dto/create-metodospago.input';
import { UpdateMetodospagoInput } from './dto/update-metodospago.input';
import { Metodospago } from './entities/metodospago.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetodospagosService {
  constructor(
    @InjectRepository(Metodospago)
    private readonly metodospagosRepository: Repository<Metodospago> 

  )
  {
  }

  async create(createMetodospagoInput: CreateMetodospagoInput):Promise<Metodospago> {

    const created = this.metodospagosRepository.create(createMetodospagoInput);
    return await this.metodospagosRepository.save(created); 

  }

  async findAll():Promise<Metodospago[]> {
    return await this.metodospagosRepository.find();
  }

  async findOne(id: string): Promise<Metodospago> {
    const metodospago = await this.metodospagosRepository.findOneBy({ id });
    if (!metodospago) {
      throw new Error(`Metodo no encontrado`);
    }
    return metodospago;
  }

  async update(id: string, updateMetodospagoInput: UpdateMetodospagoInput):Promise<Metodospago> {
    const { id: _id, ...rest } = updateMetodospagoInput;
    const updated = await this.metodospagosRepository.preload({
      id,
      ...rest,
    });
    if (!updated) {
      throw new Error(`metodo no encontrado`);
      }
      return await this.metodospagosRepository.save(updated);
    }

  async remove(id: string):Promise<Metodospago> {
    const removed = await this.metodospagosRepository.findOne({ where: { id } });
    if (!removed) {
      throw new Error(`Metodo no encontrado`);
    }
    await this.metodospagosRepository.remove(removed);
    return {...removed, id};
  }
}

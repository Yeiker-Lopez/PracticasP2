import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MetodospagosService } from './metodospagos.service';
import { CreateMetodospagoDto } from './dto/create-metodospago.dto';
import { UpdateMetodospagoDto } from './dto/update-metodospago.dto';

@WebSocketGateway({ cors: true })
export class MetodospagosGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly metodospagosService: MetodospagosService) {}

  @SubscribeMessage('createMetodospago')
  async create(@MessageBody() createMetodospagoDto: CreateMetodospagoDto) {
    const nuevoMetodospago = await this.metodospagosService.create(createMetodospagoDto);
    const todosMetodospagos = await this.metodospagosService.findAll();
    this.server.emit('metodospagoCreado', todosMetodospagos);
    return nuevoMetodospago;
  }

  @SubscribeMessage('findAllMetodospagos')
  async findAll() {
    const metodospagos = await this.metodospagosService.findAll();
    this.server.emit('metodospagosListados', metodospagos);
    return metodospagos;
  }

  @SubscribeMessage('findOneMetodospago')
  async findOne(@MessageBody() id: number) {
    const metodospago = await this.metodospagosService.findOne(id);
    this.server.emit('metodospagoEncontrado', metodospago);
    return metodospago;
  }

  @SubscribeMessage('updateMetodospago')
  async update(@MessageBody() data: { id: number; updateMetodospagoDto: UpdateMetodospagoDto }) {
    const metodospagoActualizado = await this.metodospagosService.update(data.id, data.updateMetodospagoDto);
    const todosMetodospagos = await this.metodospagosService.findAll();
    this.server.emit('metodospagoActualizado', todosMetodospagos);
    return metodospagoActualizado;
  }

  @SubscribeMessage('removeMetodospago')
  async remove(@MessageBody() id: number) {
    const metodospagoEliminado = await this.metodospagosService.remove(id);
    const todosMetodospagos = await this.metodospagosService.findAll();
    this.server.emit('metodospagoEliminado', todosMetodospagos);
    return metodospagoEliminado;
  }
}
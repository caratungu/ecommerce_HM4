import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { Product } from '../products/entities/products.entity';
import { Status } from 'src/enums/orderStatus.enum';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRespository: OrdersRepository) {}

  getOrders(id: string) {
    return this.ordersRespository.getOrder(id);
  }

  addOrder(userId: string, products: Partial<Product>[]) {
    return this.ordersRespository.addOrder(userId, products);
  }

  deleteOrder(id: string) {
    return this.ordersRespository.deleteOrder(id);
  }
}

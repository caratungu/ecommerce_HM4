import { BadGatewayException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from './entities/orders-details.entity';
import { Repository } from 'typeorm';
import { OrderDetailDto } from './dtos/orders-details.dto';

@Injectable()
export class OrdersDetailsRepository {
  constructor(
    @InjectRepository(OrderDetail)
    private ordersDetailsRepository: Repository<OrderDetail>,
  ) {}

  async getOrderDetailsByID(id: string): Promise<OrderDetail> {
    const orderDetails = await this.ordersDetailsRepository.findOne({
      where: { id },
      relations: {
        products: true,
      }
    });
    if (orderDetails) {
      return orderDetails;
    } else {
      throw new BadGatewayException('No existe ningún detalle de orden con el ID indicado');
    }
  }

  async createOrderDetails(orderDetails: OrderDetailDto): Promise<OrderDetail> {
    try {
      const newOrderDetail = await this.ordersDetailsRepository.save(orderDetails);
      return newOrderDetail;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async deleteOrderDetails(id: string) {
    await this.ordersDetailsRepository.remove(
      await this.ordersDetailsRepository.findOne({
        where: {
          id
        }
      })
    );
    return 'Detalle de orden eliminado satisfactoriamente'
  }
}

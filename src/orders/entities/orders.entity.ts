import { Status } from 'src/enums/orderStatus.enum';
import { OrderDetail } from '../../ordersDetails/entities/orders-details.entity';
import { User } from '../../users/entities/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({
  name: 'orders',
})
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column()
  date: Date;
  
  @Column({
    nullable: true,
    default: Status.ENLISTMENT
  })
  status?: Status;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: User | User['id'];

  @OneToOne(() => OrderDetail, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'order_detail_id'})
  orderDetail: OrderDetail;
}

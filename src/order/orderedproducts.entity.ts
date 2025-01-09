import { Column,CreateDateColumn,Entity,OneToMany,OneToOne,PrimaryGeneratedColumn} from 'typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from 'src/products/products.entity';

@Entity({ name: 'orderedproducts' })
export class OrderedProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => OrderEntity, (order) => order.id)
  order_id: OrderEntity;

  @OneToMany(() => ProductEntity, (product) => product.id)
  product_id: ProductEntity;

  @Column()
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;
}

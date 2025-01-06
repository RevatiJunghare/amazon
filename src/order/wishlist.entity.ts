import { AuthEntity } from "src/auth/auth.entity";
import { ProductEntity } from "src/products/products.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'orders'})
export class WishlistEntity{
    @PrimaryGeneratedColumn()
    order_id:number

    @Column()
    product_name:string

    @Column()
    image:string

    @Column()
    price:number

    // Relationship with UserEntity
    @ManyToOne(() => AuthEntity, (user) => user.orders, { onDelete: 'CASCADE' })
    user: AuthEntity;

    // Relationship with ProductEntity
    @ManyToOne(() => ProductEntity, (product) => product.orders, { onDelete: 'CASCADE' })
    product: ProductEntity;
}
import { AuthEntity } from "src/auth/auth.entity";
import { ProductEntity } from "src/products/products.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'wishlists'})
export class WishlistEntity{
    @PrimaryGeneratedColumn()
    order_id:number

    // Relationship with UserEntity
    @ManyToOne(() => AuthEntity, (user) => user.id, { onDelete: 'CASCADE' })
    user: AuthEntity;

    // Relationship with ProductEntity
    @ManyToOne(() => ProductEntity, (product) => product.id, { onDelete: 'CASCADE' })
    product: ProductEntity;
}
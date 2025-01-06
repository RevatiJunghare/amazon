import { WishlistEntity } from "src/order/wishlist.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'amazon-products'})
export class ProductEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    product_name:string

    @Column()
    image:string

    @Column()
    price:number

    @Column()
    rating:number
   
    @Column({nullable:true})
    category:string

    @OneToMany(() => WishlistEntity, (order) => order.product)
    orders: WishlistEntity[];

}
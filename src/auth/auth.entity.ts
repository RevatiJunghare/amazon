import { WishlistEntity } from "src/order/wishlist.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'auth'})
export class AuthEntity extends BaseEntity{
   @PrimaryGeneratedColumn()
   id:number

   @Column()
   username:string

   @Column()
   email:string

   @Column()
   password:string

   @OneToMany(() => WishlistEntity, (order) => order.user)
   orders: WishlistEntity[];
}
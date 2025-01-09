import { WishlistEntity } from "src/wishlist/wishlist.entity";
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

   // @OneToMany(() => WishlistEntity, (wishlist) => wishlist.user)
   // wishlists: WishlistEntity;
}
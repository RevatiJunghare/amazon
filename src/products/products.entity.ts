import { MediaEntity } from "src/media/media.entity";
import { WishlistEntity } from "src/wishlist/wishlist.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'amazon-products'})
export class ProductEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    product_name:string

    @ManyToOne(() => MediaEntity, { cascade: true, eager: true })
    @JoinColumn({ name: 'image_id' })
    image: MediaEntity;

    @Column()
    price:number

    @Column()
    rating:number
   
    @Column({nullable:true})
    category:string

    @CreateDateColumn()
    createdAt:Date

}
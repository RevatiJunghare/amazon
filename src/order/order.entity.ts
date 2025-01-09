import { AuthEntity } from "src/auth/auth.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'order'})
export class OrderEntity{
    @PrimaryGeneratedColumn()
    id:number

    @OneToOne(()=>AuthEntity, (user)=>user.id)
    user:AuthEntity

    @Column()
    user_id:number

    @Column()
    product_id:number

    @CreateDateColumn()
    createdAt:Date

    @Column({nullable:true})
    status:string

    @Column()
    address:string

    @Column()
    total:number

    @CreateDateColumn()
    delivery_date:Date

    @Column()
    payment_status:string

    @Column()
    mode:string

    @Column()
    quantity:number
}
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TransactionEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    amount:number

    @Column()
    amount_paid:number

    @Column()
    amount_due:number

    @Column()
    currency:string

    @Column()
    receipt:string

    @Column()
    status:string

    @Column({default:0})
    attempts:number

    @CreateDateColumn()
    createdAt:Date
}
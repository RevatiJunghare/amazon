import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'product_images'})
export class MediaEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    url:string

    @CreateDateColumn()
    createdAt:Date

    
}
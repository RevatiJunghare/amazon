import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderEntity } from "./order.entity";
import { Repository } from "typeorm";
import { OrderedProductsEntity } from "./orderedproducts.entity";
import { ProductEntity } from "src/products/products.entity";

@Injectable()
export class OrderService{
    constructor(
        @InjectRepository(OrderEntity)
        private orderrepository:Repository<OrderEntity>,

        @InjectRepository(ProductEntity)
        private productrepository:Repository<ProductEntity>

    ){}

    async ADDORDER(formData:any,user:any){

        const order = await this.orderrepository.create({
            user_id:user['user_id'],
            address:formData.address,
            quantity:formData.quantity,
            product_id:formData.product_id,
            payment_status:formData.payment_status,
            mode:formData.mode
        })

        const product = await this.productrepository.findOne({
            where:{
                id:order.product_id
            }
        })

        const TotalPrice = product.price * order.quantity
    
        order['total'] = TotalPrice

        await this.orderrepository.save(order)

        return {
            message: "Order added successfully"
        };
    }
}
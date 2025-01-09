import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "./order.entity";
import { OrderedProductsEntity } from "./orderedproducts.entity";
import { ProductEntity } from "src/products/products.entity";

@Module({
    imports:[TypeOrmModule.forFeature([OrderEntity,OrderedProductsEntity,ProductEntity])],
    controllers:[OrderController],
    providers:[OrderService]
})
export class OrderModule{}
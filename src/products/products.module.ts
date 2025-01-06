import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./products.entity";
import { ProductController } from "./products.controller";
import { ProductService } from "./products.service";
import { AuthEntity } from "src/auth/auth.entity";
import { WishlistEntity } from "src/order/wishlist.entity";

@Module({
    imports:[TypeOrmModule.forFeature([ProductEntity,AuthEntity,WishlistEntity])],
    controllers:[ProductController],
    providers:[ProductService]
})
export class ProductModule{}
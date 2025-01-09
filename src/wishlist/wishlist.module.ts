import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WishlistEntity } from "./wishlist.entity";
import { OrderController } from "./wishlist.controller";
import { WishlistService } from "./wishlist.service";
import { AuthEntity } from "src/auth/auth.entity";
import { ProductEntity } from "src/products/products.entity";

@Module({
    imports:[TypeOrmModule.forFeature([WishlistEntity,AuthEntity,ProductEntity])],
    controllers:[OrderController],
    providers:[WishlistService]
})
export class WishlistModule{}
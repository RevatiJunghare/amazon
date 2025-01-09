import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./products.entity";
import { ProductController } from "./products.controller";
import { ProductService } from "./products.service";
import { AuthEntity } from "src/auth/auth.entity";
import { WishlistEntity } from "src/wishlist/wishlist.entity";
import { MediaEntity } from "src/media/media.entity";
import { MediaService } from "src/media/media.service";

@Module({
    imports:[TypeOrmModule.forFeature([ProductEntity,AuthEntity,WishlistEntity,MediaEntity])],
    controllers:[ProductController],
    providers:[ProductService,MediaService]
})
export class ProductModule{}
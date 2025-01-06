import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthEntity } from "./auth.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { WishlistEntity } from "src/order/wishlist.entity";

@Module({
    imports:[TypeOrmModule.forFeature([AuthEntity,WishlistEntity])],
    controllers:[AuthController],
    providers:[AuthService]
})

export class AuthModule{}
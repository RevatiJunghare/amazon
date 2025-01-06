import { Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { WishlistService } from "./wishlist.service";
import { jwtAuthGuard } from "src/auth/auth.guard";


@UseGuards(jwtAuthGuard)
@Controller('wishlist')
export class OrderController{
    constructor(
        private readonly wishlistservice:WishlistService
    ){}

    
    @Post('add-to-wishlist/:userId/:productId')
    ADDTOWISHLIST(@Param() params:any){
       return this.wishlistservice.ADDTOWISHLIST(params)
    }

    @Get('all-wishlist-items')
    ALLWISHLIST(){
        return this.wishlistservice.AllWISHLIST()
    }
}
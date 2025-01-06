import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthEntity } from "src/auth/auth.entity";
import { ProductEntity } from "src/products/products.entity";
import { Repository } from "typeorm";
import { WishlistEntity } from "./wishlist.entity";

@Injectable({})
export class WishlistService{
    constructor(
        @InjectRepository(AuthEntity)
        private authrepository:Repository<AuthEntity>,

        @InjectRepository(ProductEntity)
        private productrepository:Repository<ProductEntity>,

        @InjectRepository(WishlistEntity)
        private wishlistrepository:Repository<WishlistEntity>
    ){}



    async ADDTOWISHLIST(params:any){

        const loggedInUser = await this.authrepository.findOne({
            where:{
                id:params.userId
            }
        })

        if(!loggedInUser){
            throw new HttpException('Invalid user',HttpStatus.NOT_FOUND)
        }

        const product = await this.productrepository.findOne({
            where:{
                id:params.productId
            }
        })

        if(!product){
            throw new HttpException('Invalid product',HttpStatus.NOT_FOUND)
        }

        const order = await this.wishlistrepository.create({
            product_name:product['product_name'],
            image:product['image'],
            price:product['price']

        })

        return await this.wishlistrepository.save(order)
    }



    async AllWISHLIST(){
        return await this.wishlistrepository.find()
    }



}
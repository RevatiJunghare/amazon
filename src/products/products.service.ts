import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./products.entity";
import { ILike, Repository } from "typeorm";

@Injectable({})
export class ProductService{
    constructor(
        @InjectRepository(ProductEntity)
        private productrepository:Repository<ProductEntity> 
    ){}


    async CREATEProduct(formData:any){
      const product = await this.productrepository.create(formData)
      return await this.productrepository.save(product)
    }

    async ALLProducts(req:any,payload:any){
        const CategoryQuery = req.query['Category']
        const SearchQuery = req.query['Search']

        const page = payload.page
        const limit = payload.limit
    
        const offset = (page-1)*limit

        const products = await this.productrepository.find({
            where:{
                category:CategoryQuery,
                ...(SearchQuery ? { product_name: ILike(`%${SearchQuery}%`) } : {}), 
            },
            take:limit,
            skip:offset
        })
        return products;
    }


}
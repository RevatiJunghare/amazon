import { Body, Controller, Get, Post, Query, Req, UseGuards } from "@nestjs/common";
import { ProductService } from "./products.service";
import { jwtAuthGuard } from "src/auth/auth.guard";

@Controller('products')
export class ProductController{
    constructor(
        private readonly productservice : ProductService
    ){}

    @Post('add-product')
    async ADDPRODUCT(@Body() formData:any){
      return await this.productservice.CREATEProduct(formData)
    }

     @UseGuards(jwtAuthGuard)
    @Post('all-products')
    async ALLPRODUCTS(@Body() payload:any,@Req() req:Request){
       console.log("Request#######################",payload)
        return await this.productservice.ALLProducts(req,payload)
    }
}
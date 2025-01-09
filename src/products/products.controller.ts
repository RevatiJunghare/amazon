import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ProductService } from "./products.service";
import { jwtAuthGuard } from "src/auth/auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('products')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) {}

    @UseGuards(jwtAuthGuard)
    @Post('add-product')
    @UseInterceptors(FileInterceptor('product_image_file'))
    async ADDPRODUCT(
        @Body() formData: any,
        @UploadedFile() file: Express.Multer.File,
    ) {
        return await this.productService.CREATEProduct(formData, file);
    }
}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { ProductEntity } from "./products.entity";
import { MediaEntity } from "src/media/media.entity";
import { MediaService } from "src/media/media.service";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
        @InjectRepository(MediaEntity)
        private mediaRepository: Repository<MediaEntity>,
        private mediaService: MediaService,
    ) {}

    async CREATEProduct(formData: any, file: Express.Multer.File) {
        // Step 1: Upload the image to S3
        const imageUrl = `https://revvamazon.s3.ap-south-1.amazonaws.com/${file.originalname}`;
        await this.mediaService.upload(file.originalname, file.buffer);

        // Step 2: Save image metadata in MediaEntity
        const image = this.mediaRepository.create({ url: imageUrl });
        const savedImage = await this.mediaRepository.save(image);

        // Step 3: Save product data in ProductEntity
        const product = this.productRepository.create({
            ...formData,
            image: savedImage, // Link the saved image
        });

        return await this.productRepository.save(product);
    }

    async ALLProducts(req: any, payload: any) {
        const CategoryQuery = req.query['Category'];
        const SearchQuery = req.query['Search'];

        const page = payload.page;
        const limit = payload.limit;
        const offset = (page - 1) * limit;

        const products = await this.productRepository.find({
            where: {
                category: CategoryQuery,
                ...(SearchQuery ? { product_name: ILike(`%${SearchQuery}%`) } : {}),
            },
            relations: ['image'], // Include the associated image
            take: limit,
            skip: offset,
        });

        return products;
    }
}

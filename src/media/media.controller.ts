import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { MediaService } from "./media.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('media')
export class MediaController{
    constructor(
        private readonly mediaservice:MediaService
    ){}

    @Post('product-media')
    @UseInterceptors(FileInterceptor('product_image_file'))
    async UPLOADFILE(@UploadedFile(new ParseFilePipe({
        // validators:[ 
            // new MaxFileSizeValidator({maxSize:5000}),
            // new FileTypeValidator({fileType:'image/jpeg'})
                    // ]
    })) file:Express.Multer.File){
      console.log(file)
      await this.mediaservice.upload(file.originalname, file.buffer)
    }
}
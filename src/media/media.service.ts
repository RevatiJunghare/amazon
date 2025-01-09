import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable({})
export class MediaService{
    private readonly s3Clinet = new S3Client({
        region: 'ap-south-1'
    })

    constructor(
        private readonly configservice: ConfigService
    ){}


    async upload(fileName:string, file:Buffer){
        await this.s3Clinet.send(
            new PutObjectCommand({
                Bucket:'revvamazon',
                Key:fileName,
                Body:file
            })
        )
    }
}
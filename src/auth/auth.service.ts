import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AuthEntity } from "./auth.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable({})
export class AuthService{
    constructor(
        @InjectRepository(AuthEntity)
        private authrepository: Repository<AuthEntity>
    ){}

    async Signup(formData:any):Promise<AuthEntity>{
        const salt = await bcrypt.genSalt()
        const password = await bcrypt.hash(formData.password,salt)

        const user = new AuthEntity()
        user.username = formData.username
        user.email = formData.email
        user.password = password
        
        return await user.save()
    }

    async Signin(formData:any){
        const user = await this.authrepository.findOneBy({email:formData.email})
        if(!user){
            throw new HttpException('Invalid Credential',HttpStatus.NOT_ACCEPTABLE)
        }

        const isPasswordValid = await bcrypt.compare(formData.password,user.password)

        if(!isPasswordValid){
            throw new HttpException('Invalid Password',HttpStatus.UNAUTHORIZED)
        }

        const payload = {
            email:user.email,
            password:user.password,
            user_id:user.id
        }

        const token = await jwt.sign(payload,'amazon-user')

        return {
            message:'User LogedIn Successfully',
            Token:token
        }
    }
}
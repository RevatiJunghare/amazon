import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthEntity } from "./auth.entity";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authservice:AuthService
    ){}

    @Post('signup')
    async SIGNUP(@Body() formData:any):Promise<AuthEntity>{
      return await this.authservice.Signup(formData)
    }

    @Post('signin')
    async SIGNIN(@Body() formData:any){
      return await this.authservice.Signin(formData)
    }
}
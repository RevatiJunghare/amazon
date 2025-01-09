import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import * as jwt from "jsonwebtoken"
import { Request } from "express";

@Injectable()
export class jwtAuthGuard implements CanActivate{
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request:Request = context.switchToHttp().getRequest() 
      const token = request.headers['authorization'] 

      if(!token){
        return false
      }

     try{
        const payload = jwt.verify(token,'amazon-user')
        request['user'] = payload
  
        return true
     }catch(err){
        console.log("error in token verification",err)
     }
    }
}
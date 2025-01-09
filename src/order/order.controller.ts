import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { OrderService } from "./order.service";
import { jwtAuthGuard } from "src/auth/auth.guard";

@Controller('order')
export class OrderController{
    constructor(
        private readonly orderservice:OrderService
    ){}

    @UseGuards(jwtAuthGuard)
    @Post('add-order')
    ADDORDER(@Body() formData:any,@Req() req:Request){
        const user = req['user']
      return this.orderservice.ADDORDER(formData,user)
    }
}
import { Injectable } from "@nestjs/common";

@Injectable()
export class TransactionService {
  async paymentInitOperation(razorObj: any): Promise<any> {
    return {
      status: true,
      orderID: razorObj.id,
      message: "Payment initialized successfully!",
    };
  }

  async paymentSucessOperation(): Promise<string> {
    return "Success";
  }

  async paymentFailOperation(): Promise<string> {
    return "Fail";
  }
}

import { Controller, Post, Req, Res } from "@nestjs/common";
import { TransactionService } from "./transaction.service";
// import Razorpay from "razorpay";
// import { validatePaymentVerification } from "razorpay-utils";
// import { createHmac } from "node:crypto";

 @Controller("transaction")
 export class TransactionController {
//   constructor(private readonly transactionService: TransactionService) {}

//   @Post("make-payment")
//   async createPayment(@Req() req: any, @Res() res: any) {
//     let resData: any = {
//       status: false,
//       d: {},
//       message: "",
//     };

//     try {
//       let mainAmount = 500;
//       const razorPayOrderID = "New-order";

//       const options = {
//         amount: mainAmount * 100, // Convert to paisa
//         currency: "INR",
//         receipt: razorPayOrderID,
//       };

    //   const razorInstance = new Razorpay({
    //     key_id: process.env.RAZOR_PAY_ID,
    //     key_secret: process.env.RAZOR_PAY_SECRET,
    //   });

//       razorInstance.orders.create(options, async (err: any, razordata: any) => {
//         if (err) {
//           resData.message = JSON.stringify(err);
//           return res.status(200).json(resData);
//         } else {
//           const response = await this.transactionService.paymentInitOperation(
//             razordata
//           );
//           resData.status = true;
//           resData.d = {
//             order: razordata.id,
//             razorpayObject: razordata,
//           };
//           resData.message = "Payment initiated successfully!";
//           return res.status(200).json(resData);
//         }
//       });
//     } catch (err) {
//       console.error(err);
//       resData.d = err;
//       resData.message = "Error while creating payment!";
//       return res.status(500).json(resData);
//     }
//   }

//   @Post("confirm-payment")
//   async confirmPayment(@Req() req: any, @Res() res: any) {
//     let resData: any = {
//       status: false,
//       d: {},
//       message: "",
//     };

//     const {
//       order_uuid,
//       razorpay_order_id,
//       razorpay_signature,
//       razorpay_payment_id,
//     } = req.body;

//     if (!order_uuid || !razorpay_order_id || !razorpay_signature || !razorpay_payment_id) {
//       resData.message = "Invalid request parameters!";
//       return res.status(400).json(resData);
//     }

//     try {
//       const isValid = validatePaymentVerification(
//         {
//           order_id: razorpay_order_id,
//           payment_id: razorpay_payment_id,
//         },
//         razorpay_signature,
//         process.env.RAZOR_PAY_SECRET
//       );

//       if (!isValid) {
//         resData.message = "Invalid payment verification!";
//         await this.transactionService.paymentFailOperation();
//         return res.status(400).json(resData);
//       }

//       await this.transactionService.paymentSucessOperation();
//       resData.status = true;
//       resData.message = "Payment confirmed successfully!";
//       return res.status(200).json(resData);
//     } catch (err) {
//       console.error(err);
//       resData.d = err;
//       resData.message = "Error while confirming payment!";
//       return res.status(500).json(resData);
//     }
//   }
}

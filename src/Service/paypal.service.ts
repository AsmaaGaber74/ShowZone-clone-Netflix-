
// import { Injectable } from '@angular/core';
// import { PayPalScriptLoader } from '@paypal/paypal-js';



// @Injectable({
//   providedIn: 'root'
// })
// export class PaypalService {
//   private paypalClientId = 'YOUR_PAYPAL_CLIENT_ID';

//   constructor(private payPalScriptLoader: PayPalScriptLoader) { }

//   async loadPaypal(): Promise<void> {
//     await this.payPalScriptLoader.loadPayPalSDK({ clientId: this.paypalClientId });
//   }

//   async createOrder(amount: number): Promise<string> {
//     const paypal = (window as any).paypal;
//     return paypal
//       .Checkout.createOrder({
//         purchase_units: [{
//           amount: {
//             value: amount.toString(),
//             currency_code: 'USD'
//           }
//         }]
//       })
//       .then((data: any) => {
//         return data.orderID;
//       });
//   }

//   async captureOrder(orderId: string): Promise<void> {
//     const paypal = (window as any).paypal;
//     return paypal
//       .Checkout.captureOrder(orderId)
//       .then((details: any) => {
//         console.log(details);
//       });
//   }
// }

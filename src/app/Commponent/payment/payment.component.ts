
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { BackgroundService } from '../../../Service/background.service';
import { Subscription } from 'rxjs';
import { NavbarloginComponent } from '../navbarlogin/navbarlogin.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,NavbarloginComponent,FooterComponent,TranslateModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(private backgroundService: BackgroundService) {}
  paymentSucceeded: boolean = false;
  backgroundColor: string = 'white';
  backgroundColorSubscription: Subscription | undefined;
  ngOnInit(): void 
  {
    render({
      id: "#paypalbutton",
      currency: 'USD',
      value: "10.00",
      onApprove: (details: any) => 
        {
        this.paymentSucceeded = true;
       }
    });

    this.backgroundColorSubscription = this.backgroundService.backgroundColorChanged.subscribe(color => {
      this.backgroundColor = color;
      console.log('Background color:', this.backgroundColor);  
    });
  }
  
}

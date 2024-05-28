// declare var google:any;

// import { Component, OnInit } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Router, RouterModule } from '@angular/router';
// import { BackgroundService } from '../../../Service/background.service';
// import { bindCallback } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule,RouterModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent implements OnInit
// {
//   constructor(private backgroundService: BackgroundService,private router:Router){ }
//   ngOnInit(): void 
//   {
//        google.accounts.id.initialize(
//         {
//           client_id:'888422676843-p3rfqqrjmgcp5710ecumgdeprjn7emqn.apps.googleusercontent.com',
//            callback:(resp:any)=>this.handelLogin(resp),
            
//         });

//         google.accounts.id.renderButton(document.getElementById("google-btn"),
//           {
//              theme:'filled_blue',
//              size:'large',
//              shape:'rectangle',
//              width:350 
//           })
//    }
//           private decodeToken(token:string)
//           {
//             return JSON.parse(atob(token.split(".")[1]));
//           }
//           handelLogin(response:any)
//           {
//                if (response)
//                 {
//                     const payLoad=this.decodeToken(response.credential);
//                      sessionStorage.setItem("loginuser",JSON.stringify(payLoad));
//                      this.router.navigate(['/'])
//                 }
//           }
//   }
 

import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BackgroundService } from '../../../Service/background.service';

declare var google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private backgroundService: BackgroundService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void
   {
      google.accounts.id.initialize
      ({
        client_id: '888422676843-p3rfqqrjmgcp5710ecumgdeprjn7emqn.apps.googleusercontent.com',
        callback: (resp: any) => this.handleLogin(resp),
      });

      google.accounts.id.renderButton(document.getElementById("google-btn"), 
      {
        theme: 'filled_blue',
        size: 'large',
        shape: 'rectangle',
        width: 350
      });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any) {
    if (response) {
      const payload = this.decodeToken(response.credential);
      sessionStorage.setItem("loginuser", JSON.stringify(payload));
      this.ngZone.run(() => {
        this.router.navigate(['/']);
      });
    }
  }
}

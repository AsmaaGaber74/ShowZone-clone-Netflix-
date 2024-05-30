
// import { Component, OnInit, NgZone } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute, Router, RouterModule } from '@angular/router';
// import { BackgroundService } from '../../../Service/background.service';
// import { AuthService } from '../../../Service/auth.service';
// declare var google: any;

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   constructor(
//     private backgroundService: BackgroundService,
//     private router: Router,
//     private ngZone: NgZone,
//     private  authService: ActivatedRoute
//   ) {}
//   credentials = {
//     email: '',
//     password: ''
//   };
//   ngOnInit(): void
//    {
//       google.accounts.id.initialize
//       ({
//         client_id: '888422676843-p3rfqqrjmgcp5710ecumgdeprjn7emqn.apps.googleusercontent.com',
//         callback: (resp: any) => this.handleLogin(resp),
//       });

//       google.accounts.id.renderButton(document.getElementById("google-btn"), 
//       {
//         theme: 'filled_blue',
//         size: 'large',
//         shape: 'rectangle',
//         width: 350
//       });
//   }

//   private decodeToken(token: string) {
//     return JSON.parse(atob(token.split(".")[1]));
//   }

//   handleLogin(response: any) {
//     if (response) {
//       const payload = this.decodeToken(response.credential);
//       sessionStorage.setItem("loginuser", JSON.stringify(payload));
//       this.ngZone.run(() => {
//         this.router.navigate(['/']);
//       });
//     }
//   }


// }

import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BackgroundService } from '../../../Service/background.service';
import { AuthService } from '../../../Service/auth.service';
import { FormsModule } from '@angular/forms';
declare var google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage='';
  loginobject: any = {
    username: '',
    password: ''
  };
  signupusers: any[] = [];


  constructor(
    private backgroundService: BackgroundService,
    private router: Router,
    private ngZone: NgZone,
    private  authService: ActivatedRoute
  ) {}
  credentials = {
    email: '',
    password: ''
  };
  ngOnInit(): void
   {
      const storedUsers = localStorage.getItem('signupusers');
      if (storedUsers) 
        {
          this.signupusers = JSON.parse(storedUsers);
        }
        
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

  login(): void {
    const isUserExist = this.signupusers.find(m => m.username === this.loginobject.username && m.password === this.loginobject.password);
    if (isUserExist !== undefined) {
      // alert("Login successful");
      this.errorMessage = ''; 
      this.router.navigate(['/']);
    } else {
      // alert("Login failed");
      this.errorMessage = 'Username or password is incorrect';
    }
  }
}
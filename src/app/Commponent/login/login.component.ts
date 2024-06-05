
import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BackgroundService } from '../../../Service/background.service';
import { AuthService } from '../../../Service/auth.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarloginComponent } from '../navbarlogin/navbarlogin.component';

declare var google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule,NavbarloginComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lang = '';
  selectedLanguage: string = 'en';
  errorMessage = '';
  loginobject: any = {
    username: '',
    password: ''
  };
  signupusers: any[] = [];
  isDropdownOpen = false;
  currentLang: string;
  constructor(
    private backgroundService: BackgroundService,
    private router: Router,
    private ngZone: NgZone,
    private authService: ActivatedRoute,
    private translate: TranslateService
  ) 
  {
   
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang() || 'en';
    this.currentLang = browserLang.match(/en|ar/) ? browserLang : 'en';
    this.translate.use(this.currentLang);
  }

  credentials = {
    email: '',
    password: ''
  };

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('signupusers');
    if (storedUsers) {
      this.signupusers = JSON.parse(storedUsers);
    }
    console.log("users", this.signupusers);

    google.accounts.id.initialize({
      client_id: '888422676843-p3rfqqrjmgcp5710ecumgdeprjn7emqn.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp),
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 320
    });

    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.lang = storedLang;
    }
    this.translate.use(this.lang); 
    this.translate.onLangChange.subscribe(langChangeEvent => {
      this.lang = langChangeEvent.lang;
    });

    this.lang=localStorage.getItem('lang')||'en';
   
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  login(): void {
    const isUserExist = this.signupusers.find(m => m.username === this.loginobject.username && m.password === this.loginobject.password);
    if (isUserExist !== undefined) {
      sessionStorage.setItem("loginuser", JSON.stringify({ 
        name: isUserExist.username, 
        picture: 'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png', 
        loginType: 'username' 
      }));
      this.errorMessage = ''; 
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Username or password is incorrect';
    }
  }
  
  handleLogin(response: any) {
    if (response) {
      const payload = this.decodeToken(response.credential);
      sessionStorage.setItem("loginuser", JSON.stringify({
        name: payload.name, 
        picture: payload.picture, 
        loginType: 'google' 
      }));
      this.ngZone.run(() => {
        this.router.navigate(['/home']);
      });
    }
  }
  
  changelanguage(lang: string) {
  
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
    console.log("lang",lang);
    this.currentLang = lang;
  }
  
  selectlanguages(event: any) {
    this.translate.use(event.target.value);
  }
 

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

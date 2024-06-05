import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BackgroundService } from '../../../Service/background.service';
import { AuthService } from '../../../Service/auth.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-navbarlogin',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule,],
  templateUrl: './navbarlogin.component.html',
  styleUrl: './navbarlogin.component.css'
})
export class NavbarloginComponent implements OnInit
{
  lang = '';
  selectedLanguage: string = 'en';
  currentLang: string;
  isDropdownOpen = false;
  constructor(
    private backgroundService: BackgroundService,
    private router: Router,
    private translate: TranslateService
  ) 
  {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang() || 'en';
    this.currentLang = browserLang.match(/en|ar/) ? browserLang : 'en';
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void {
    
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

import { Routes } from '@angular/router';
import { HomeComponent } from './Commponent/home/home.component';
import { NavbarComponent } from './Commponent/navbar/navbar.component';
import { NotFoundComponent } from './Commponent/not-found/not-found.component';
import { MovidetailsComponent } from './Commponent/movidetails/movidetails.component';
import { SearchComponent } from './Commponent/search/search.component';
import { LoginComponent } from './Commponent/login/login.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
        children: [
            { path: 'navbar', component: NavbarComponent },
        ],
    },
    { path: 'details/:id', component: MovidetailsComponent },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    
    { path: '**', component: NotFoundComponent }
];

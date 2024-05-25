import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Commponent/navbar/navbar.component';
import { BackgroundService } from '../Service/background.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShowTime';

  constructor(private backgroundService: BackgroundService) {}

  ngOnInit() {
    this.backgroundService.initializeBackground();
  }
}

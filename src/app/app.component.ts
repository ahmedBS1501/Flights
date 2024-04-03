import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListAvionsComponent } from './list-avions/list-avions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent ,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Flights';
  
}

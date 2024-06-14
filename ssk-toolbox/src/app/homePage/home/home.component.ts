import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'ssk-home',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

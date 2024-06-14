import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './homePage/home/home.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherSearch} from '@ng-icons/feather-icons';
import { ionLogoGoogle} from '@ng-icons/ionicons';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({ featherSearch, ionLogoGoogle})]
})
export class AppComponent {
  title = 'ssk-toolbox';
}

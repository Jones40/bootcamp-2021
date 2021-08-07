import { Component } from '@angular/core';
import { results } from './api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'destiny';
  weaponsArray = results.data.items;
  firstWeapon = results.data.items[0];
}

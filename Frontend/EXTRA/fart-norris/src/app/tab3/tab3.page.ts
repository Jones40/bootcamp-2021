import { Component } from '@angular/core';
import { JokeService } from '../apis/joke.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(public jokeS: JokeService) {}
  retreiveFavs(): any[] {
    return this.jokeS.favoritesArray;
  }
}

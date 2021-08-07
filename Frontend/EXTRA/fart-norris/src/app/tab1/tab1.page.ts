import { Component } from '@angular/core';
import { JokeService } from '../apis/joke.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  daJoke = '';
  constructor(private jokeS: JokeService) {}

  ngOnInit() {
    this.generateAJoke();
  }
  async generateAJoke() {
    const result = await this.jokeS.getRandomJoke();
    console.log(result);
    this.daJoke = result;

    // audio farts
    const sound = new Audio();
    const rnd11 = Math.floor(Math.random() * 11) + 1;
    sound.src = '../../assets/sounds/fart (' + rnd11 + ').mp3';
    sound.load();
    sound.play();
  }
}

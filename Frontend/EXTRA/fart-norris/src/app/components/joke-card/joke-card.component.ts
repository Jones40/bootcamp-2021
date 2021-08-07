import { Component, Input, OnInit } from '@angular/core';
import { JokeService } from 'src/app/apis/joke.service';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss'],
})
export class JokeCardComponent implements OnInit {
  @Input() jokeObject: any;
  constructor(private jokeS: JokeService) {}

  ngOnInit() {}
  handleClick() {
    this.jokeS.addToFav(this.jokeObject);
    // Audio
    const sound = new Audio();
    sound.src = '../../../assets/sounds/love.mp3';
    sound.load();
    sound.play();
  }
}

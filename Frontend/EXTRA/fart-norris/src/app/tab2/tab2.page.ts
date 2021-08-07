import { Component } from '@angular/core';
import { JokeService } from '../apis/joke.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  categoriesArray = [];
  daJoke = '';
  constructor(private jokeS: JokeService) {}
  ngOnInit() {
    this.loadCategories();
  }
  async loadCategories() {
    const result = await this.jokeS.getCategories();
    console.log(result);
    this.categoriesArray = result;
  }
  async selectCategory(category: string) {
    const result = await this.jokeS.getJokeByCat(category);
    this.daJoke = result;
  }
}

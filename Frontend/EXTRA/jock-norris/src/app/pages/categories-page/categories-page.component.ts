import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/apis/chuck.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css'],
})
export class CategoriesPageComponent implements OnInit {
  //properties
  categoriesArray = [];
  daJoke = '';
  constructor(private chuckS: ChuckService) {}

  async ngOnInit() {
    this.categoriesArray = await this.chuckS.getCategories();
  }
  async handleClick(something: string) {
    // alert(something);
    const response = await this.chuckS.getCatJoke(something);
    console.log(response);
    this.daJoke = response.value;
  }
  like(daJoke: string) {
    this.chuckS.saveDatJoke(daJoke);
  }
}

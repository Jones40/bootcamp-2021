import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  baseUrl = 'https://api.chucknorris.io/jokes';
  favoritesArray: any[] = [];
  constructor(private http: HttpClient) {}

  async getRandomJoke(): Promise<any> {
    return await this.http.get(this.baseUrl + '/random').toPromise();
  }
  async getCategories(): Promise<any> {
    return await this.http.get(this.baseUrl + '/categories').toPromise();
  }
  async getJokeByCat(catParam: string): Promise<any> {
    return await this.http
      .get(this.baseUrl + '/random?category=' + catParam)
      .toPromise();
  }
  addToFav(joke) {
    this.favoritesArray.push(joke);
    console.log(this.favoritesArray);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ChuckService {
  baseUrl = 'https://api.chucknorris.io/jokes';
  favoriteArray: string[] = [];

  constructor(private http: HttpClient) {}
  // API GET CALL
  async getRndJoke(): Promise<any> {
    return await this.http.get(this.baseUrl + '/random').toPromise();
  }
  async getCategories(): Promise<any> {
    return await this.http.get(this.baseUrl + '/categories').toPromise();
  }
  async getCatJoke(catParam: string): Promise<any> {
    return await this.http
      .get(this.baseUrl + '/random?category=' + catParam)
      .toPromise();
  }
  saveDatJoke(jokeStr: string) {
    this.favoriteArray.push(jokeStr);
  }
}

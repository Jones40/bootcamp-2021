import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  baseUrl = 'https://ajax-course.herokuapp.com';
  constructor(private http: HttpClient) {}
  async getRoomMessages(id: string): Promise<any> {
    return await this.http.get(this.baseUrl + '/messages/' + id).toPromise();
  }
  async sendMessage(id: string, data: any) {
    return await this.http
      .post(this.baseUrl + '/messages/' + id, data)
      .toPromise();
  }
}

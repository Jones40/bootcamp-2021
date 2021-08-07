import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/apis/users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  usersArray: any[] = [];
  constructor(private usersS: UsersService) {}

  async ngOnInit() {
    const result = await this.usersS.getUsers();
    console.log(result);
    this.usersArray = result.data;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomsService } from 'src/app/apis/rooms.service';

@Component({
  selector: 'app-createroom-page',
  templateUrl: './createroom-page.component.html',
  styleUrls: ['./createroom-page.component.css'],
})
export class CreateroomPageComponent implements OnInit {
  roomValue = 'something';
  constructor(private roomsS: RoomsService, private router: Router) {}

  ngOnInit(): void {}
  async handleSubmit() {
    //alert(this.roomValue);
    const result = await this.roomsS.createRoom(this.roomValue);
    console.log(result);
    if (result.status === 1) {
      // success -> redirects to rooms list
      this.router.navigate(['/rooms']);
    } else {
      alert(result.data);
    }
  }
}

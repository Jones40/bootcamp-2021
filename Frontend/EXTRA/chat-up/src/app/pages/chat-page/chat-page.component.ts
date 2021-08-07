import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/apis/messages.service';
import { UsersService } from 'src/app/apis/users.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit {
  constructor(
    private url: ActivatedRoute,
    private msgS: MessagesService,
    private usersS: UsersService
  ) {}
  roomId = '';
  messagesArray: any[] = [];
  usersArray: any[] = [];

  async ngOnInit() {
    this.roomId = this.url.snapshot.params['roomId'];
    // Retreive the message from the API /messages/1
    const MsgResult = await this.msgS.getRoomMessages(this.roomId);
    this.messagesArray = MsgResult.data;
    const UsersResult = await this.usersS.getUsers();
    this.usersArray = UsersResult.data;
  }
  getUsersDetails(givenId: number) {
    return this.usersArray.find((u) => u.id === givenId);
  }

  userMsg = '';
  handleSubmit() {
    const msgValue = {
      hash: localStorage.getItem('hash'),
      message: this.userMsg,
    };
    this.msgS.sendMessage(this.roomId, msgValue);
    this.userMsg = '';
  }
}

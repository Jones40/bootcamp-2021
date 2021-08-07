import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/apis/users.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  usernameValue = '';
  passwordValue = '';
  imageValue = '';
  constructor(private usersS: UsersService, private router: Router) {}
  ngOnInit(): void {}
  async handleSubmit() {
    alert('submitted');
    const userValue = {
      username: this.usernameValue,
      password: this.passwordValue,
      image: this.imageValue,
    };
    console.log(userValue);
    const result = await this.usersS.registerUser(userValue);
    if (result.status == 1) {
      this.router.navigate(['/rooms']);
    } else {
      alert(result.data);
    }
  }
}

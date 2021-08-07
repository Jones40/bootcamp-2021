import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/apis/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  usernameValue = '';
  passwordValue = '';
  constructor(private usersS: UsersService, private router: Router) {}
  async handleSubmit() {
    alert('submitted');
    const userValue = {
      username: this.usernameValue,
      password: this.passwordValue,
    };
    console.log(userValue);
    const result = await this.usersS.loginUser(userValue);
    if (result.status == 1) {
      this.router.navigate(['/rooms']);
      // Save the hash
      localStorage.setItem('hash', result.data.hash);
      // localStorage.setItem('id', result.data.id);
      // localStorage.setItem('username', result.data.username);
      // localStorage.setItem('image', result.data.image);
    } else {
      alert(result.data);
    }
  }

  ngOnInit(): void {}
}

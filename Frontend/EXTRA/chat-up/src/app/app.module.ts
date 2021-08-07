import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';

//  HTTP Client Module to access external APIs
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { CreateroomPageComponent } from './pages/createroom-page/createroom-page.component';
//lets import the FORM FEATURES
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoomsPageComponent,
    HomePageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ChatPageComponent,
    CreateroomPageComponent,
  ],
  imports: [FormsModule, HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import {HttpClient} from "@angular/common/http";
import {ErrorMessageService} from "../error-message.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  errorelogin : string =''

  constructor(private httpClient: HttpClient , private  authService : AuthService) { }

  login() {
    this.authService.login(this.user)
  }

  ngOnInit(): void {
  }

}

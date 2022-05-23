import { Injectable } from '@angular/core';
import {User} from "./User";
import {HttpClient} from "@angular/common/http";
import {Token} from "./Token";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject: Subject <Token> = new Subject();

  constructor(private httpClient: HttpClient ) { }

  login(user : User){
    this.httpClient.post('http://localhost:8080/spring-auth/auth',{
      "password": user.password,
      "username":user.username
    }).subscribe(response => {
      sessionStorage.setItem("auth_token" , JSON.stringify(response))
        this.userSubject.next(response as Token)
      },
      responseError =>{
        console.log("error")
      })
  }


}

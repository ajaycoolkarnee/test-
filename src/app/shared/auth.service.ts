import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private rout: Router
  ) { }

  IsloggedIn(){
    // debugger;
   
    if(localStorage.getItem('user')){
      return true;

    }
    else{
      return false;
    }
  }
}

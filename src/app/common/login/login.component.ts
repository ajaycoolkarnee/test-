import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginUser(item: any){
      console.warn(item);
    }

    myFunction() {
      var x = document.getElementById("password");
      console.log(x)
      // if (x === "password") {
      //   x = "text";
      // } else {
      //   x = "password";
      // }
    }
    loginForm = new FormGroup({
      user: new FormControl(''),
      password: new FormControl('')
    })

}

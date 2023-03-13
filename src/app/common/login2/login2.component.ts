import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import data from '../../../assets/json/first.json';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  loginForm: FormGroup;
  public isError: boolean =false;

  constructor(
    private _routing : Router,
   
  ){
    this.loginForm = new FormGroup({
      user: new FormControl('',[Validators.required, Validators.minLength(4)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    })
  }
  ngOnInit(){
     localStorage.clear();
     
    
    
  }


  hide : boolean = true;
  showw: boolean = true;
  myFunction() {
    if(this.showw){
      this.hide = !this.hide;
      this.showw = !this.showw;
    }
    else{
      this.hide = true;
      this.showw = true;
    }
  }

  loginUser(){
    console.warn(this.loginForm.value);
    console.log(data);  


    
    let len = data.length;       
    for(let i = 0; i<len; i++){
      if(this.loginForm.value.user==data[i].user && this.loginForm.value.password==data[i].password){
       
        localStorage.setItem('user', this.loginForm.controls['user'].value);
        this._routing.navigate(['employee']);
        console.log('sucess login');
        console.log(localStorage.getItem('user'));
        
        break;
      }
      else{
         this.isError=true;
      }
    }

    
  }

  get user(){
    return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password');
  }
// onSubmit(){
//   localStorage.getItem('formData', JSON.stringify(this.loginForm.value));
// }
}

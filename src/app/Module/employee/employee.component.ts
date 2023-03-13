import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{


  pop: boolean=false;

  pop1: boolean=true;

  constructor(private routt: Router){

  }

  func2(){
    this.routt.navigate(['employee']);
    this.pop=false;
    
  }

  ngOnInit(): void {
     const obs$ = interval(1000);
     obs$.subscribe((d)=>{
      console.log(d);
      if(d==5) {
        this.pop = true;
        // this.pop1=false;
      }
     })
  }

}








          
             //// kahi yet nai bc jr developer lavda ajayyy

























































         
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-trainee',
  templateUrl: './login-trainee.component.html',
  styleUrls: ['./login-trainee.component.css']
})
export class LoginTraineeComponent implements OnInit {

  public loginFrom!: FormGroup

  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginFrom = this.formBuilder.group({
      email : [''],
      password : ['']

    })
  }

login(){

  this.http.get<any>("http://localhost:3000/register").subscribe
  (res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginFrom.value.email && a.password === this.loginFrom.value.password
    });
    if(user){
      alert("Login Success");
      this.loginFrom.reset();
      this.router.navigate(['add']);
    }else{
      alert("user not found!");
    }

  },err=>{
    alert("Something went worong!");
  })
}

}

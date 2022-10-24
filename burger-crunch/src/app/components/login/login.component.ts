import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import {ILoginUser} from '../login/login-interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.check()
  }

  check(){
    if(localStorage.getItem('token')){
      this.router.navigate(['menu']);
    }
  }

  // onLogin() {
  //   console.log(this.loginForm.value);
  //   this.usersService.getTokenAuth(this.loginForm.value).subscribe((data) => {
  //     console.log('DATA:::', data);
  //     this.router.navigate(['menu']);
  //   });
  // }

  onLogin(form:ILoginUser) {
    console.log(this.loginForm.value);
    this.usersService.getTokenAuth(this.loginForm.value).subscribe((data) => {
      if(dataResponse.status=="ok"){
        localStorage.setItem("token",dataResponse.result.token);
        console.log('DATA:::', data);
        this.router.navigate(['menu']);
      }else{

      }
      
      
    });
  }
}

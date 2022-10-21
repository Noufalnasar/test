import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  captcha:any=""
  myCaptcha:any=["102weFG","1Y3o6D","QyP12k","pw91Sc"]
  cap:any=""
  showCap:any=0

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.showCaptcha()
  }
  showCaptcha(){

    this.captcha=this.myCaptcha[this.showCap]
  }
  refresh(){
    this.showCap+=1
    this.showCaptcha()
  }
  login(){
    if(this.captcha==this.cap){
      alert("login Successfull")
      this.router.navigateByUrl("/home")
      
    }
    else{
      alert("Captcha error")
      this.cap=""
      this.refresh()
      

    }
  }




}

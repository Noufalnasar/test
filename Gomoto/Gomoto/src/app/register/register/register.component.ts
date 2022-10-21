import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name=""
  emailid=""
  pwd=""
  mobnum=""
  pan=""
  isTick:boolean=false

    registerForm=this.fb.group({
    name:['',[Validators.required,Validators.pattern('[A-za-z]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
    emailid:['', [Validators.required, Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}')]],
    mobnum:['',[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]{10}')]],
    pan:['',[Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],


  })
 
  
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }

  isClicked(){
    this.isTick=!this.isTick

  }
  register(){
     if(this.registerForm.valid){
      if(this.isTick==true){
        alert("successfully registered..!!")
        this.router.navigateByUrl("/")
      }
      else{
        alert("plaese accept terms and Conditions")

      }

     }
     else{
      alert("Invalid form..Please enter the details properly")
     }

    
  
  }
}

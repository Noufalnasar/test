import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  {
    path:"",component: LoginComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"home",component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

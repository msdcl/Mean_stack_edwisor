import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from '../todo-single-user/todo-list/todo-list.component';
import { TodoSingleUserModule } from '../todo-single-user/todo-single-user.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoSingleUserModule,
    RouterModule.forChild([
         {path:'signup',component:SignupComponent},
         {path:'addTodoList', component:TodoListComponent}
    ])
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }

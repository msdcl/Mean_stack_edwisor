import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Cookie } from 'ng2-cookies/ng2-cookies';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private email;
  private password;
  public nextClicked: boolean = false
  public userEmail
  public secureCode
  public newPassword
  constructor(public http: HttpService, public router: Router, public toastr: ToastrService) { }

  ngOnInit() {
  }

  public doSignIn() {
    if (!this.email) {
      this.toastr.warning('Enter your email', 'Alert!');


    } else if (!this.password) {

      this.toastr.warning('Enter your password', 'Alert!');


    } else {

      let data = {
        email: this.email,
        password: this.password
      }

      this.http.doSignInFunction(data).subscribe(
        (apiResponse) => {
          console.log(apiResponse)

          if (apiResponse.status === 200) {
            // console.log(apiResponse)

            Cookie.set('authtoken', apiResponse.data.token);

            Cookie.set('userId', apiResponse.data.userDetails.userId);

            this.http.settUserInfoInLocalStorage(apiResponse.data.userDetails)
            this.router.navigate(['/addTodoList']);



          } else {


            this.toastr.warning(apiResponse.message, 'Alert!');

          }

        },
        error => {
          this.toastr.error("Some error has been occured????", 'alert!')

        }
      );

    }
  }


  public forgotPassword = () => {
    if (this.userEmail) {
      this.http.sendForgotPasswordEmail(this.userEmail).subscribe((response) => {
        if (response.error) {
          this.toastr.error(response.message)
        } else {
          this.nextClicked = true;
          this.toastr.success(response.message)
        }
      })
    } else {
      this.toastr.warning("please enter email")
    }
  }

  public changePassword = () => {
     if(this.secureCode){
       if(this.newPassword){
         let data = {
           email : this.userEmail,
           password:this.newPassword,
           code: this.secureCode
         }
        this.http.updatePassword(data).subscribe((response) => {
          if (response.error) {
            this.toastr.error(response.message)
          } else {
            this.toastr.success(response.message)
            this.nextClicked =false;
            this.newPassword ="";
            this.secureCode=""
          }
        })
       }else{
        this.toastr.warning("Enter your new password")
       }
     }else{
       this.toastr.warning("Enter code")
     }
  }


  public closeButtonClicked = ()=>{
    this.nextClicked =false;
            this.newPassword ="";
            this.secureCode=""
  }
}

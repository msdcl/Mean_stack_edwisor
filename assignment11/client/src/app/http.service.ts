import { Injectable } from '@angular/core';
import { Observable,Subject,pipe } from 'rxjs';
import { HttpClient, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public baseUrl = "http://api-advance.singhmahendra.me"
 // public baseUrl="http://localhost:3002/api/v1"
  constructor(public http:HttpClient) { }

  public doSignUpFunction(data):Observable<any>{
    const params = new HttpParams()
         .set('firstName',data.firstName)
         .set('lastName',data.lastName)
         .set('email',data.email)
         .set('password',data.password)
         .set('mobileNumber',data.mobileNumber)
         .set('nickName',data.nickName)
  return this.http.post(`${this.baseUrl}/api/v1/signup`,params);
     
  }
  public doSignInFunction(data):Observable<any>{
   const params = new HttpParams()
   .set('email',data.email)
   .set('password',data.password)
    return this.http.post(`${this.baseUrl}/api/v1/login`,params);
      
  }

  public getUserInfoFromLocalStorage= ()=>{
      return JSON.parse(localStorage.getItem('userInfo'));
  }
  public settUserInfoInLocalStorage= (data)=>{
    localStorage.setItem('userInfo',JSON.stringify(data));
  }

  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))

    return this.http.post(`${this.baseUrl}/api/v1/users/logout`, params);

  } 

  public createNewChatRoom(data):Observable<any>{
    const params = new HttpParams()
         .set('name',data.name)
         .set('createdBy',data.createdBy)
         
  return this.http.post(`${this.baseUrl}/api/v1/chatRoom/create`,params);
     
  }

  public getAllChatRooms():Observable<any>{
    
    return this.http.get(`${this.baseUrl}/api/v1/chatRoom/allChatRoom`);
  }
}

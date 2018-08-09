import { Injectable } from '@angular/core';
import { Observable, Subject, pipe } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public baseUrl = "http://localhost:3000/api/v1"

  constructor(public http: HttpClient) { }

  // function will hit api to login
  public doSignInFunction(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password)
    return this.http.post(`${this.baseUrl}/login`, params);

  }

  // function to get info from local storage
  public getUserInfoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  // function to set value in local staorage
  public settUserInfoInLocalStorage = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }

  public doSignUpFunction(data):Observable<any>{
    const params = new HttpParams()
         .set('firstName',data.firstName)
         .set('lastName',data.lastName)
         .set('email',data.email)
         .set('password',data.password)
         .set('mobileNumber',data.mobileNumber)
         .set('countryCode',data.countryCode)
  return this.http.post(`${this.baseUrl}/signup`,params);
     
  }

  public addNewTaskToList(data):Observable<any>{
    const params = new HttpParams()
         .set('userId',data.userId)
         .set('listName',data.currList)
         .set('taskName',data.newItem)
  return this.http.post(`${this.baseUrl}/addNewTask`,params);
     
  }

  public getAllTasksOfList(data):Observable<any>{
    const params = new HttpParams()
         .set('userId',data.userId)
         .set('listName',data.currList)
  return this.http.post(`${this.baseUrl}/getAllTask`,params);
     
  }

  public deleteTaskOfList(data):Observable<any>{
    const params = new HttpParams()
         .set('id',data.id)
        
  return this.http.post(`${this.baseUrl}/deleteTaskFromList`,params);
     
  }

  public updateTaskOfList(data):Observable<any>{
    const params = new HttpParams()
         .set('id',data.id)
         .set('isDone',data.isDone)
  return this.http.post(`${this.baseUrl}/updateTaskFromList`,params);
     
  }

  public getAllTodoList(data):Observable<any>{
    const params = new HttpParams()
         .set('userId',data)
  return this.http.post(`${this.baseUrl}/getAllTodoList`,params);
     
  }

  public deleteTodoList(data):Observable<any>{
    const params = new HttpParams()
         .set('id',data.id)
        
  return this.http.post(`${this.baseUrl}/deleteTodoList`,params);
     
  }

  public addNewTodoList(data):Observable<any>{
    const params = new HttpParams()
         .set('userId',data.userId)
         .set('listName',data.name)
  return this.http.post(`${this.baseUrl}/addNewTodoList`,params);
     
  }

  public editTaskName(data):Observable<any>{
    const params = new HttpParams()
         .set('id',data.id)
         .set('taskName',data.taskName)
  return this.http.post(`${this.baseUrl}/updateTaskFromList`,params);
     
  }

  public getAllSubTaskOfTask(data):Observable<any>{
    const params = new HttpParams()
         .set('parentId',data)
  return this.http.post(`${this.baseUrl}/getAllSubTasks`,params);
     
  }

  public addNewSubTaskToTask(data):Observable<any>{
    const params = new HttpParams()
         .set('parentId',data.parentId)
         .set('subTask',data.subTask)
  return this.http.post(`${this.baseUrl}/addNewSubTask`,params);
     
  }

  public deleteSubTaskOFromList(data):Observable<any>{
    const params = new HttpParams()
         .set('id',data.id)
        
  return this.http.post(`${this.baseUrl}/deleteSubTask`,params);
     
  }

  public mark_unmark_SubTask(data):Observable<any>{
    const params = new HttpParams()
         .set('id',data.id)
         .set('isDone',data.isDone)
  return this.http.post(`${this.baseUrl}/updateSubTaskStatus`,params);
     
  }

  
  public getAllUsersOnPlatform():Observable<any>{
    
  return this.http.get(`${this.baseUrl}/getAllUsers`);
     
  }

  public pendingFriendRequests(userId):Observable<any>{
    const params = new HttpParams()
         .set('userId',userId)
  return this.http.post(`${this.baseUrl}/getAllNotification`,params);
     
  }

  public friendRequestSent(data):Observable<any>{
    const params = new HttpParams()
         .set('requestedTo',data.receiverId)
         .set('requestedBy',data.senderId)
         .set('name',data.name)
         .set('nameBy',data.nameBy)
  return this.http.post(`${this.baseUrl}/addNotification`,params);
     
  }

  public acceptFriendRequest(data):Observable<any>{
    const params = new HttpParams()
         .set('id',data.id)
         .set('userId',data.userId)
         .set('friendId',data.friendId)
         .set('friendName',data.friendName)
         .set('userName',data.userName)

         
  return this.http.post(`${this.baseUrl}/friendRequestAccepted`,params);
     
  }

  public getAllFriendsOfUser(data):Observable<any>{
    const params = new HttpParams()
         .set('userId',data)
  return this.http.post(`${this.baseUrl}/getAllFriends`,params);
     
  }

  public deleteUserFriend(data):Observable<any>{
    const params = new HttpParams()
         .set('userId',data.userId)
         .set('friendId',data.friendId)
   
  return this.http.post(`${this.baseUrl}/deleteUserFriend`,params);    
  }

  public updateUserNotificationList(data):Observable<any>{
    const params = new HttpParams()
         .set('data',data)
  return this.http.post(`${this.baseUrl}/updateUserNotificationList`,params);
     
  }



  // MULTIUSER TODO LIST ALL FUNCTIONS

  public addNewMultiuserTodoList(data):Observable<any>{
    const params = new HttpParams()
         .set('userId',data.userId)
         .set('listName',data.name)
  return this.http.post(`${this.baseUrl}/addNewMultiUserTodoList`,params);
     
  }

  public getAllMultiUserTodoList(data):Observable<any>{
    const params = new HttpParams()
         .set('userId',data)
  return this.http.post(`${this.baseUrl}/getAllMultiUserTodoLists`,params);   
  }

  public shareListWithFriend(data):Observable<any>{
    const params = new HttpParams()
         .set('friendId',data.friendId)
         .set('listName',data.listName)
         .set('ownerName',data.userName)
  return this.http.post(`${this.baseUrl}/shareTodoListWithFriend`,params);   
  }
  

  public getAllFriendToListShared(data):Observable<any>{
    const params = new HttpParams()
         .set('listName',data)
  return this.http.post(`${this.baseUrl}/allfriendsToListShared`,params);   
  }

  public removeFriendFromSharedList(data):Observable<any>{
    const params = new HttpParams()
         .set('friendId',data.friendId)
         .set('listName',data.listName)
  return this.http.post(`${this.baseUrl}/removeFriendFromSharedList`,params);
     
  }

   public getAllTextNotificationForUser(data,skip):Observable<any>{
    const params = new HttpParams()
         .set('userId',data)
         .set('skip',skip)
  return this.http.post(`${this.baseUrl}/getAllTextNotification`,params);   
  }
  public updateTextNotificationForUser(data):Observable<any>{
    const params = new HttpParams()
         .set('userId',data.userId)
         .set('isSeen',data.isSeen)
  return this.http.post(`${this.baseUrl}/updateTextNotification`,params);   
  }

  public deleteMultiUserTodoList(data):Observable<any>{
    const params = new HttpParams()
         .set('id',data)
  return this.http.post(`${this.baseUrl}/deleteMultiUserList`,params);   
  }

  public addNewTaskToMultiUserList(data):Observable<any>{
    const params = new HttpParams()
         .set('userId',data.userId)
         .set('listName',data.currList)
         .set('taskName',data.newTask)
         .set('userName',data.userName)
  return this.http.post(`${this.baseUrl}/addTaskToMultiUserList`,params);
     
  }
  public getTasksOfMultiUserList(data):Observable<any>{
    const params = new HttpParams()
         .set('listName',data)
  return this.http.post(`${this.baseUrl}/getAllTasksOfMultiUserList`,params);
     
  }
  

  public deleteTasksOfMultiUserList(data):Observable<any>{
    const params = new HttpParams()
         .set('id',data.id)
         .set('userId',data.userId)
         .set('userName',data.userName)
         .set('sharedWith',data.sharedWith)
         .set('taskName',data.taskName)
         .set('listName',data.listName)
  return this.http.post(`${this.baseUrl}/deleteTasksOfMultiUserList`,params);
     
  }
  
  public editTaskOfMultiUserList(data):Observable<any>{
    const params = new HttpParams()
         .set('id',data.id)
         .set('taskName',data.taskName)
         .set('oldName',data.oldName)
         .set('listName',data.listName)
         .set('userName',data.userName)
         .set('sharedWith',data.sharedWith)
         .set('userId',data.userId)
         .set('type',data.type)
         
  return this.http.post(`${this.baseUrl}/updateTaskOfMultiUserList`,params);
     
  }
   
  public markTaskOfMultiUserList(data):Observable<any>{
    const params = new HttpParams()
    .set('id',data.id)
    .set('taskName',data.taskName)
    .set('isDone',data.isDone)
    .set('listName',data.listName)
    .set('userName',data.userName)
    .set('sharedWith',data.sharedWith)
    .set('userId',data.userId)
    .set('type',data.type)
  return this.http.post(`${this.baseUrl}/updateTaskOfMultiUserList`,params);
     
  }
  public sendForgotPasswordEmail(data):Observable<any>{
    const params = new HttpParams()
         .set('email',data)
  return this.http.post(`${this.baseUrl}/forgotPassword`,params);
     
  }

  public updatePassword(data):Observable<any>{
    const params = new HttpParams()
         .set('email',data.email)
         .set('code',data.code)
         .set('password',data.password)
  return this.http.post(`${this.baseUrl}/changePassword`,params);
     
  }
}

import { Injectable } from "@angular/core";
import { IUser } from "../user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { TokenStorageService } from "./token-storage.service";
const AUTH_API = 'http://localhost:7071/users/';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class AuthService {
    constructor(private http: HttpClient){}

    loginUser (username: string, password: string): Observable<any>{
        return this.http.post(AUTH_API + 'signin', {
            username: username,
            password: password
        }, httpOptions);
    }
    
    /*this.currentUser = {
            id: 1,
            firstname: 'Rico',
            lastname: 'Porter',
            username: username
    }*/

    registerUser(user): Observable<any> {
        return this.http.post(AUTH_API + 'signup', {
          username: user.username,
          password: user.password
        }, httpOptions);
    }

    /*updateCurrentUser(firstname: string, lastname: string){
        this.currentUser.firstname = firstname
        this.currentUser.lastname = lastname
    }*/
}
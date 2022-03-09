import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser:IUser

    loginUser (username: string, password: string){
        this.currentUser = {
            id: 1,
            firstname: 'Rico',
            lastname: 'Porter',
            username: username
        }
    }

    updateCurrentUser(firstname: string, lastname: string){
        this.currentUser.firstname = firstname
        this.currentUser.lastname = lastname
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}
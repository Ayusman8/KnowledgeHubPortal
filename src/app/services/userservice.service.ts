import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "http://localhost:3000/user"


  addUser(user:User){
    return this.http.post(this.apiUrl, user);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { submiturl } from '../models/submitURL';

@Injectable({
  providedIn: 'root'
})
export class SubmiturlService {

  constructor(private http: HttpClient) { }
  apiUrl: string = "http://localhost:3000/submittedUrl"

  addUrl(submiturl:submiturl){
    return this.http.post(this.apiUrl, submiturl);
  }
}

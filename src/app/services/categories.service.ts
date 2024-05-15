import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "http://localhost:3000/categories"

  getCategories() {
    // fetch from API
    // const apiUrl="http://localhost:3000/categories"
    //const http = new HttpClient();

    return this.http.get<Category[]>(this.apiUrl)

    //   const categories = 
    //   [
    //     {
    //     id:111,
    //     title:'Education',
    //     description:'Good for school students'
    //   },
    //   {
    //     id:222,
    //     title:'Sports',
    //     description:'Good for school students'
    //   },
    //   {
    //     id:333,
    //     title:'Angualr',
    //     description:'Good for developers'
    //   },
    //   {
    //     id:444,
    //     title:'Games',
    //     description:'Good for school students'
    //   },
    //   {
    //     id:555,
    //     title:'.Net',
    //     description:'Good for school students'
    //   },
    //   {
    //     id:666,
    //     title:'Java',
    //     description:'Good for school students'
    //   },
    // ];
    // return categories;
  }
  createCategory(category: Category) {
    return this.http.post(this.apiUrl, category);
  }

  deletecategory(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  editCategory(category:Category){
    return this.http.put(`${this.apiUrl}/${category.id}`, category);
  }

  getCategoryById(id: string){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}`);
  }
}

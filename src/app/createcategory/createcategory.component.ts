import { JsonPipe } from '@angular/common';
import { Component, inject, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-createcategory',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './createcategory.component.html',
  styleUrl: './createcategory.component.css'
})
export class CreatecategoryComponent {

  private categoryService:CategoriesService=inject(CategoriesService);

  category:Category = {id: 111, title: '', description:''};

  submited(categoryForm:NgForm){
    if(categoryForm.valid){
      this.categoryService.createCategory(this.category).subscribe((res) =>{
        alert(res);
      });
    }
  }

  // categoryList:string[] = [];

  // getAllCategory():string[]{
  //   return this.categoryList;
  // }
}

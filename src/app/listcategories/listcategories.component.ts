import { CommonModule, NgTemplateOutlet,  } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';
import { RouterLink } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-listcategories',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, RouterLink],
  templateUrl: './listcategories.component.html',
  styleUrl: './listcategories.component.css'
})
export class ListcategoriesComponent implements OnInit {
ngOnInit(): void {
  
//const service = new CategoriesService();
this.service.getCategories().subscribe((res => {
  this.categories = res;
}));
}


constructor(private service:CategoriesService){}
//service:CategoriesService=null;
title:string="List of Categories";
categories:Category[]=[];   //[{id:111,title:'title',description:'desc'}];

onDelete(id:number){
  if(window.confirm("Are you sure to delete this category?")){
    this.service.deletecategory(id).subscribe(res => {
      alert("Successfully Deleted!")
      this.service.getCategories().subscribe(res => {
        this.categories = res;
      });
    });
  }
}
}

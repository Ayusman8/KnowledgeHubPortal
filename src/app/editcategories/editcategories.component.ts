import { JsonPipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createcategory',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './editcategories.component.html',
  styleUrl: './editcategories.component.css'
})

export class EditcategoriesComponent implements OnInit{

constructor(private aRoute:ActivatedRoute, private router:Router, private service:CategoriesService){}

  categoryIdToEdit!:string;
  category: any = {};

  ngOnInit(): void {
    this.aRoute.paramMap.subscribe(res => {
      this.categoryIdToEdit = res.get('id') as string;
      this.service.getCategoryById(this.categoryIdToEdit).subscribe(res=>{
        this.category = res;
      });
    })
  }

  // category:Category = {id: 111, title: '', description:''};

  submited(){
    this.service.editCategory(this.category).subscribe(res =>{
      alert("Edited");
      this.router.navigateByUrl('category/list');
    })
  }
}

import { Component, inject } from '@angular/core';
import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SubmiturlService } from '../services/submiturl.service';
import { submiturl } from '../models/submitURL';

@Component({
  selector: 'app-submiturl',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './submiturl.component.html',
  styleUrl: './submiturl.component.css'
})
export class SubmiturlComponent {

  private categoryService:CategoriesService=inject(CategoriesService);
  private submitUrlService:SubmiturlService=inject(SubmiturlService);


  constructor(private fb:FormBuilder){}
  categories: Category[] = [];

  ngOnInit(): void {
    // Call the method to fetch all categories when the component is initialized
    this.fetchAllCategories();
  }

    // Method to fetch all categories
    fetchAllCategories(): void {
      this.categoryService.getAllCategories().subscribe((data: Category[]) => {
        this.categories = data;
      });
    }

    onsubmit(){
      if(this.submiturlform.valid){
        console.log(this.submiturlform.value);
        const url: submiturl = {
          title: this.submiturlform.value.title!,
          url: this.submiturlform.value.url!,
          description: this.submiturlform.value.description!,
          category: this.submiturlform.value.category!
        };
        this.submitUrlService.addUrl(url).subscribe(res =>{
          alert("Successfully submitted URL Form");
        });
      }
    }

    submiturlform = this.fb.group({
      title:['',Validators.required],
      url:['', Validators.required],
      description:[''],
      category:['', Validators.required]
    });
}

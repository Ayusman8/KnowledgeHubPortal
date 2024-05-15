import { Routes } from '@angular/router';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { EditcategoriesComponent } from './editcategories/editcategories.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { canDeactivateFunctionGuard } from './route guard/testRouteDuard';
import { SubmiturlComponent } from './submiturl/submiturl.component';

export const routes: Routes = 
[
   {
        path:'',
        component:HomeComponent,
    },
{
path:'category/list',
component:ListcategoriesComponent,
title:'Knowledge Hub Portal - Category List'
},
{
    path:'category/create',
    component:CreatecategoryComponent,
    title:'Knowledge Hub Portal - Category Create'
},
{
    path:'category/edit/:id',
    component:EditcategoriesComponent
},
{
    path:'user/register',
    component:UsercomponentComponent,
    canDeactivate:[canDeactivateFunctionGuard]
},
{
    path: 'user/submit-url',
    component:SubmiturlComponent
},
{
    path:'**',
    component:ErrorComponent
}
];

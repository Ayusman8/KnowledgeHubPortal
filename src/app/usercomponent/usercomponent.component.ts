import { Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserserviceService } from '../services/userservice.service';
import { User } from '../models/user';

@Component({
  selector: 'app-usercomponent',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './usercomponent.component.html',
  styleUrl: './usercomponent.component.css'
})

export class UsercomponentComponent {

  canExit(): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    if(this.userRegForm.value.fullName !=='' || this.userRegForm.value.email !== '' )
     {
       return window.confirm('Would like to leave the registraion form?')
       //return false;
     }
     else
     return true;
 }

  constructor(private fb: FormBuilder, service:UserserviceService) { }

  private userService:UserserviceService=inject(UserserviceService);

  userRegForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  })

  onRegister() {
    if (this.userRegForm.valid) {
      const userData: User = {
        fullname: this.userRegForm.value.fullName!,
        email: this.userRegForm.value.email!,
        password: this.userRegForm.value.password!
      };
      this.userService.addUser(userData).subscribe(res => {
        alert('User added successfully');
      }, error => {
        alert('Failed to add user: ' + error);
      });
    } else {
      console.log('Invalid input');
    }
  }
  
}

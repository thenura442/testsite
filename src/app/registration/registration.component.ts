import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Interfaces/user';
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  Password2: string = '123';

  Orginalusersettings: User = {
    Name: 'example',
    Email: 'example@gmail.com',
    Id: '1123',
    Password: '123'
  }

  usersettings: User = {...this.Orginalusersettings}
  postError = false;
  postErrorMessage = '';

  constructor(private register:RegisterService) {}

  onHttpError(errorResponse:  any): void {
    console.log('error : ',errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }


  onSubmit(form: NgForm) {
    console.log('in on submit : ',form.valid);

    if(form.valid) {
      this.postError = false;
      this.register.postUserSettingsForm(this.usersettings).subscribe(
        result => console.log('success', result),
        error => this.onHttpError(error)//console.log('error', error),
      );
    }
    else {
      this.postError = true;
      this.postErrorMessage = "Please Fix the above Errors!";
    }
  }

}

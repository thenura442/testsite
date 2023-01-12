import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: User) : Observable<User> {

    return this.http.post<User>('https://test-server2-ox4p.onrender.com/api/staff/register',userSettings);

    // return of(userSettings);
  }
}

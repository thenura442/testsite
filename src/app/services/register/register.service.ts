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

    return this.http.post<User>('http://localhost:9000/api/users',userSettings);

    // return of(userSettings);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiAddress + '/login';


  constructor(private http: HttpClient,
              private router: Router) { }

  logIn(user) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const params = new HttpParams().set('email', user.email).set('password', user.password);
    const options = { headers };

    return this.http.post(this.apiUrl, params, options).toPromise();
  }

  setUser(resp: any) {
    localStorage.setItem('email', resp.email);
    localStorage.setItem('access_token', resp.jwt);
  }


  isLoggedIn() {
    return localStorage.getItem('access_token') != null;
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.URL;
  public httpOptions:any;

  constructor(public http:HttpClient) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
  }

  login(form){
    console.log('form en auth',form)
    const apiUrl = `${this.url}/svc_login.php`;
    form = JSON.stringify(form)
    let json = form

    return this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public httpOptions:any;

  constructor(public http:HttpClient) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
   }

  login(usuarios:string,clave:string){
    const apiUrl = `http://contigo.etex.com.co/api/svc_usuarios.php?tipo=2&usuario="${usuarios}"&clave="${clave}"`;

    let json = {}
    
    return this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
  }
  


}

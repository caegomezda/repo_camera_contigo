import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  private url = environment.URL;
  public httpOptions:any;

  constructor(public http:HttpClient) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
   }

  listaParametros(form){
    
      const apiUrl = `${this.url}/svc_parametros.php`;
      let json = form
      return this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
    
  }
}

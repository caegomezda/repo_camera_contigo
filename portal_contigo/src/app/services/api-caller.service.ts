import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  private url = environment.URL;
  public httpOptions:any;

  constructor(public http:HttpClient) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
   }
   //nota para estandarizar este metodo para las solicitudes, pues exiten varias que usan mismo metos pero y solo es agregarle el formulario, el cual puedo ser enviado con antelacion
  apiListas(form,tipo){
    const apiUrl = `${this.url}/svc_${tipo}.php`;
    
    let json = form
    json = JSON.stringify(json);
    console.log("json",json)
    return this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
  }
}

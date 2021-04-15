import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GestionadoService {
  public httpOptions:any;
  private url = environment.URL;
  constructor(public http:HttpClient) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
   }

  enviarGestionar(form){
    console.log("Form en servicio Gestionado",form)
    const apiUrl = `${this.url}/svc_solicitudes.php`;
    
    let json = form
    console.log("JSON EN GESTIONADA",json)
    // return this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
  }

}

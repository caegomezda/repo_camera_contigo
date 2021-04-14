import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GestionadoService {
  public httpOptions:any;

  constructor(public http:HttpClient) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
   }

  enviarGestionar(form){
    console.log("Form en servicio Gestionado",form)
    const apiUrl = `http://contigo.etex.com.co/movil/svc_solicitudes.php`;
    
    let json = form
    console.log("JSON EN GESTIONADA",json)
    // return this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
  }

}

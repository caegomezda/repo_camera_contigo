import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  public httpOptions:any;

  constructor(public http:HttpClient) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
   }

  listaMisPendientes(Pusuario,Tipo){
    let newForm = {
      Pusuario: Pusuario,
      Tipo: Tipo
    }
    const apiUrl = `http://contigo.etex.com.co/movil/svc_solicitudes.php`;
    
    let json = newForm
    
    return this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
  }

}

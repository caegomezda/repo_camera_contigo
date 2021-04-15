import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VacacionesService {

  public httpOptions:any;

  constructor(public http:HttpClient) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
   }
   //nota para estandarizar este metodo para las solicitudes, pues exiten varias que usan mismo metos pero y solo es agregarle el formulario, el cual puedo ser enviado con antelacion
  listaVacaciones(Pusuario,Tipo){
    let newForm = {
      Pusuario: Pusuario,
      Tipo: Tipo
    }
    const apiUrl = `http://contigo.etex.com.co/movil/svc_vacaciones.php`;
    
    let json = newForm
    
    return this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
  }

}

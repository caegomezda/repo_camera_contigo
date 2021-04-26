import { Injectable } from '@angular/core';
import { ApiCallerService } from './api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  tipo:string = 'solicitudes';
  constructor(private apilista : ApiCallerService) { }

  async listaSolicitudes(form){
    let result = await this.apilista.apiListas(form,this.tipo);
    return result;
  }
}

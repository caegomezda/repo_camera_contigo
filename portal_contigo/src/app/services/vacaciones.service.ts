import { Injectable } from '@angular/core';
import { ApiCallerService } from './api-caller.service';
@Injectable({
  providedIn: 'root'
})
export class VacacionesService {
  tipo:string = 'vacaciones';
  constructor(private apilista : ApiCallerService) { }

  async listaVacaciones(form){
    let result = await this.apilista.apiListas(form,this.tipo);
    return result;
  }

}

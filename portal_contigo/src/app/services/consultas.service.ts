import { Injectable } from '@angular/core';
import { ApiCallerService } from './api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  tipo:string = 'consultas';
  constructor(private apilista : ApiCallerService) { }

  async listaConsultas(form){
    let result = await this.apilista.apiListas(form,this.tipo);
    return result;
  }
}

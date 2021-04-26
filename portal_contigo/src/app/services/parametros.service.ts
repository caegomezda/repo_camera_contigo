import { Injectable } from '@angular/core';
import { ApiCallerService } from './api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  tipo:string = 'parametros';
  constructor(private apilista : ApiCallerService) { }

  async listaParametros(form){
    let result = await this.apilista.apiListas(form,this.tipo);
    return result;
  }
}

import { Injectable } from '@angular/core';
import { ApiCallerService } from './api-caller.service';
@Injectable({
  providedIn: 'root'
})
export class AuxilosService {
  tipo:string = 'auxilios';
  constructor(private apilista : ApiCallerService) { }

  async listaAuxilios(form){
    let result = await this.apilista.apiListas(form,this.tipo);
    return result;
  }
}

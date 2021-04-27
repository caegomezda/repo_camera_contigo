import { Injectable } from '@angular/core';
import { ApiCallerService } from './api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  tipo:string = 'citas';
  constructor(private apilista : ApiCallerService) { }

  async listaCitas(form){
    let result = await this.apilista.apiListas(form,this.tipo);
    return result;
  }
}

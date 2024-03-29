import { Injectable } from '@angular/core';
import { ApiCallerService } from './api-caller.service';
@Injectable({
  providedIn: 'root'
})
export class GestionadoService {
  tipo:string = 'gestionado';
  constructor(private apilista : ApiCallerService) { }

  async enviarGestionar(form){
    console.log("Form en servicio Gestionado",form)

    let result = await this.apilista.apiListas(form,this.tipo);

    // return result;
  }
}

import { Injectable } from '@angular/core';
import { ApiCallerService } from './api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class DatosPerfilService {
  tipo:string = 'datos_perfil';
  constructor(private apilista : ApiCallerService) { }

  async listaDatosPerfil(form){
    let result = await this.apilista.apiListas(form,this.tipo);
    return result;
  }
}

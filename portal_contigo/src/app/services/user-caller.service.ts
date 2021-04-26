import { Injectable } from '@angular/core';
import { TemporalMovilStoreService } from './temporal-movil-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserCallerService {
  infoUsuario:any;
  constructor(private storage : TemporalMovilStoreService) { }

  async callInfoUsuario(){
    let result= await this.storage.sendInfoUsuario();
    if (result) {
      return this.infoUsuario = result[1].value.Pusuario
    }
  }
}

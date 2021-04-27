import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from './temporal-movil-store.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  infoUsuario
  constructor(private router : Router,
              private storage : TemporalMovilStoreService,
              ) { }

  sesionCaller(){
   this.callInfoUsuario();
  }
  
  sesion(){
    if (this.infoUsuario === undefined) {
      return false;
    }else{
      return true;
    }
  }

  async sesionVerificator(){
    let result = await this.sesion();
    if (!result) {
      this.router.navigate(['/login']);
    }
  }

  async callInfoUsuario(){
    let result = await this.storage.sendInfoUsuario();
    this.infoUsuario = result[1].value.Pusuario;
    return this.infoUsuario;
  }
}

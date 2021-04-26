import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from './temporal-movil-store.service';
import { UserCallerService } from './user-caller.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  infoUsuario
  constructor(private router : Router,
              private storage : TemporalMovilStoreService,
              private user : UserCallerService) { }

  sesionCaller(){
   this.callInfoUsuario();
  }
  
  sesion(Pusuario){
    console.log("Pusuario en sesion",Pusuario)
    if (Pusuario === undefined) {
      return false
    }else{
      return true
    }
  }

  async sesionVerificator(){
    let result = await this.sesion(this.infoUsuario);
    if (!result) {
      this.router.navigate(['/login'])
    }
  }

  async callInfoUsuario(){
    let result= await this.storage.sendInfoUsuario();
    if (result) {
      this.infoUsuario = result[1].value.Pusuario
    }else{
      this.sesionVerificator();
    }
  }
}

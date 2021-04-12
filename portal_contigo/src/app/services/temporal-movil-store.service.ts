import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemporalMovilStoreService {
  infoUsuario:any
  constructor() { }

  ngOnInit(){

  }


  getInfoUsuario(result,form){
    console.log("result en store",result);
    console.log("form",form);

    this.infoUsuario = [result,form];
  }

  sendInfoUsuario(){
    return this.infoUsuario;
  }
}

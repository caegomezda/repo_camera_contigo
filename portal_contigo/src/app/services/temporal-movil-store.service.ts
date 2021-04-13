import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemporalMovilStoreService {
  infoUsuario:any;
  solicitudDetalle:any
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

  getInfoListSolicitudDetalle(solicitud){
    this.solicitudDetalle = solicitud;
  }
  
  sendInfoListSolicitudDetalle(){
    return this.solicitudDetalle;
  }

}

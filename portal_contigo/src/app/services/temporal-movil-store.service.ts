import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemporalMovilStoreService {
  infoUsuario:any;
  solicitudDetalle:any;
  aprobacionDetalle:any;
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

  getInfoListAprobacionesDetalle(aprobaciones){
    this.aprobacionDetalle = aprobaciones;
  }

  sendInfoListAprobacionesDetalle(){
    return this.aprobacionDetalle;
  }

}

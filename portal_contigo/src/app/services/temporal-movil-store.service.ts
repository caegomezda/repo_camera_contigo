import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemporalMovilStoreService {
  infoUsuario:any;
  solicitudDetalle:any;
  aprobacionDetalle:any;
  nombreSolicitud:any;
  cita:any;
  nomina:any;
  cartelera:any;
  politica:any;
  pregunta:any;
  cena:any;
  d = new Date();
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

  getNombreSolicitud(nombreSolicitud){
    this.nombreSolicitud = nombreSolicitud
  }

  sendNombresolicitud(){
    return this.nombreSolicitud
  }

  getInfoNomina(nomina){
    this.nomina = nomina
  }

  sendInfoNomina(){
    return this.nomina
  }

  getInfoCitas(cita){
    this.cita = cita
  }

  sendInfoCitas(){
    return this.cita
  }

  getInfoCartelera(cartelera){
    this.cartelera = cartelera
  }

  sendInfoCartelera(){
    return this.cartelera
  }

  getInfoPolitica(politica){
    this.politica = politica
  }

  sendInfoPolitica(){
    return this.politica
  }

  getInfoPregunta(pregunta){
    this.pregunta = pregunta
  }

  sendInfoPregunta(){
    return this.pregunta
  }

  getInfoCena(cena){
    this.cena = cena
  }

  sendInfoCena(){
    return this.cena
  }

  fechaHoy(Ndias){
    let dd = this.d.getDate() + Ndias;
    let mm = this.d.getMonth() + 1;
    let yy = this.d.getFullYear();
    let myDateString = yy + "-" + mm + "-" +dd + "T00:00:00-01:00";
    if (dd<10) {
      myDateString = yy + "-" + mm + "-" + "0" +dd + "T00:00:00-01:00";
    } else if (mm<10) {
      myDateString = yy + "-" + "0" + mm + "-"+dd + "T00:00:00-01:00";
    }else if(dd<10 && mm<10){
      myDateString = yy + "-" +"0"+ mm + "-" + "0" +dd + "T00:00:00-01:00";
    }
    return myDateString
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPerfilService } from 'src/app/services/datos-perfil.service';
import { SesionService } from 'src/app/services/sesion.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.page.html',
  styleUrls: ['./actualizar-datos.page.scss'],
})
export class ActualizarDatosPage implements OnInit {
  aprobForm:any = {
    Nombres: "",
    Apellidos: "",
    Direccion: "",
    ViviendaPropia: "",
    Telefono: "",
    Celular: "",
    Escolaridad:"",
    EstadoCivil: "",
    Correo: "",
    Barrio: "",
    Municipio:"",
    Hijos: "",
    Respuesta:"",
    Pusuario:"",
    Tipo:""
  }

  listaDatosperfil:any;
  isLoad:Boolean = false;
  infoUsuario:any;
  constructor(private router : Router,
              private storage : TemporalMovilStoreService,
              private sesion : SesionService,
              private datosperfil : DatosPerfilService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.callInfoUsuario();
  }

  tomarFoto(){
    console.log("Tomar foto");
    this.storage.getNombreSolicitud("Actualizar Datos Personales");
    this.router.navigate(['/camara-page']);
  }

  async listaInfoDatosPerfil(){
    let newForm = {
      Tipo: "1",
      Pusuario : this.infoUsuario
    }
    let result = await this.datosperfil.listaDatosPerfil(newForm);
    this.listaDatosperfil = result['ListaParametros'];
    this.formMkaer();
    this.isLoad = true;
    console.log("this.listaDatosperfil",this.listaDatosperfil);
  }

  // sendNombresolicitud(){
  // }

  formMkaer(){
    this.aprobForm['Nombres'] = this.listaDatosperfil['Nombres']
    this.aprobForm['Apellidos'] = this.listaDatosperfil['Apellidos']
    this.aprobForm['Direccion'] = this.listaDatosperfil['Direccion']
    this.aprobForm['ViviendaPropia'] = this.listaDatosperfil['ViviendaPropia']
    this.aprobForm['Telefono'] = this.listaDatosperfil['Telefono']
    this.aprobForm['Celular'] = this.listaDatosperfil['Celular']
    this.aprobForm['Escolaridad'] = this.listaDatosperfil['Escolaridad']
    this.aprobForm['EstadoCivil'] = this.listaDatosperfil['EstadoCivil']
    this.aprobForm['Correo'] = this.listaDatosperfil['Correo']
    this.aprobForm['Barrio'] = this.listaDatosperfil['Barrio']
    this.aprobForm['Municipio'] = this.listaDatosperfil['Municipio']
    this.aprobForm['Hijos'] = this.listaDatosperfil['Hijos']
    this.aprobForm['Respuesta'] = this.listaDatosperfil['Respuesta']
  }

  actualizarInfoPersonal(newForm){
    this.datosperfil.listaDatosPerfil(newForm)
  }

  enviarDatosPerfil(){
    this.aprobForm['Tipo'] ="2";
    this.aprobForm['Pusuario'] = this.infoUsuario;
    console.log("this.aprobForm actualizando datos",this.aprobForm);

    this.actualizarInfoPersonal(this.aprobForm)
  }

  async callInfoUsuario(){
    let result= await this.storage.sendInfoUsuario();
    if (result) {
      this.infoUsuario = result[1].value.Pusuario;
      this.listaInfoDatosPerfil()
    }else{
      this.sesion.sesionVerificator();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.page.html',
  styleUrls: ['./actualizar-datos.page.scss'],
})
export class ActualizarDatosPage implements OnInit {
  listaUsuario:any = {
    Nombres: "Camilo",
    Apellidos: "Gomez",
    Direccion: "Cr24c #61a - 30",
    ViviendaPropia: "Si",
    Telefono: "8864020",
    Celular: "3046763011",
    Escolaridad:"TECNICO",
    EstadoCivil: "Soltero",
    Correo: "camiloedg23@gmail.com",
    Barrio: "LA ESTRELLA",
    Municipio:"Manizales",
    Hijos: "0",
    Descripcion:""
  }
  constructor(private router : Router,
              private storage : TemporalMovilStoreService) { }

  ngOnInit() {
  }

  tomarFoto(){
    console.log("Tomar foto");
    this.storage.getNombreSolicitud("Actualizar Datos Personales");
    this.router.navigate(['/camara-page']);
  }

  sendNombresolicitud(){
  }

  actualizarInfoPersonal(){
    console.log("Actualizar Informacion Personal")
  }

}

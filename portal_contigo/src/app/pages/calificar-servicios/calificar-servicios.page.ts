import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-calificar-servicios',
  templateUrl: './calificar-servicios.page.html',
  styleUrls: ['./calificar-servicios.page.scss'],
})
export class CalificarServiciosPage implements OnInit {

  listadoAreasCalificar:any = ['area1','area2','area3','area4','area5','area6']
  listadoPuntuacion:any = ['EXCELENTE','MUY BUENO','BUENO','REGULAR','MALO']

  constructor(private router : Router,
              private storage: TemporalMovilStoreService) { }

  ngOnInit() {
  }

  sendNombresolicitud(){
    this.storage.getNombreSolicitud("Auxilios Estudio");
  }

  enviarInfoCalificarServicio(){
    console.log("Enviar Informacion");
  }

}

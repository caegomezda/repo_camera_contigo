import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {
  preguntaInfo:any
  constructor(private storage : TemporalMovilStoreService,
              private router : Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.preguntaInfo = [

      {
        
        nombre:"nombre de la pregunta 1",
        id:"id pregunta 1",
        fecha:"2021-04-12",
        area: "GESTION DE LO HUMANO"
      },
      {
        
        nombre:"nombre pregunta 2",
        id:"id pregunta 2",
        fecha:"2021-04-17",
        area:"INGENIERIA DE PROCESOS"

      },
    ]
      

    
  }

  carteleraDetalle(preguntaInfo){
    console.log("Cartelera detalle");
    console.log(preguntaInfo);
    this.storage.getInfoPregunta(preguntaInfo);
    this.router.navigate(['/preguntas-detalle'])
  }

}

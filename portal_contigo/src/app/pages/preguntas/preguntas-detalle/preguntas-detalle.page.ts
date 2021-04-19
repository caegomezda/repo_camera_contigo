import { Component, OnInit } from '@angular/core';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-preguntas-detalle',
  templateUrl: './preguntas-detalle.page.html',
  styleUrls: ['./preguntas-detalle.page.scss'],
})
export class PreguntasDetallePage implements OnInit {
  infoPregunta:any;
  isLoad:Boolean = false
  constructor(private storage : TemporalMovilStoreService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getPoliticaInfo()
  }

  async getPoliticaInfo(){
   let result = await this.storage.sendInfoPregunta();
   console.log("result politica detalle", result);
   this.isLoad = true
   this.infoPregunta = result
  }


}

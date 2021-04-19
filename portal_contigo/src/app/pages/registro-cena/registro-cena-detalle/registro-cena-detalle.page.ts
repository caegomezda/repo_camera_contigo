import { Component, OnInit } from '@angular/core';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-registro-cena-detalle',
  templateUrl: './registro-cena-detalle.page.html',
  styleUrls: ['./registro-cena-detalle.page.scss'],
})
export class RegistroCenaDetallePage implements OnInit {
  infoRegistroCena:any;
  isLoad:Boolean = false
  constructor(private storage : TemporalMovilStoreService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getCenaInfo()
  }

  async getCenaInfo(){
   let result = await this.storage.sendInfoCena();
   console.log("result cena detalle", result);
   this.isLoad = true
   this.infoRegistroCena = result
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-citas-presenciales',
  templateUrl: './citas-presenciales.page.html',
  styleUrls: ['./citas-presenciales.page.scss'],
})
export class CitasPresencialesPage implements OnInit {
  doctoresCitas = ['doctora1','doctor1','doctor2','doctora2','doctor3','doctora3','doctora4']
  constructor(private router : Router,
              private storage : TemporalMovilStoreService

  ) { }

  ngOnInit() {
  }

  citasDetalles(cita){
    console.log("Cita Detalles",cita);
    this.storage.getInfoCitas(cita);
    this.router.navigate(['/citas-detalle'])
  }


}

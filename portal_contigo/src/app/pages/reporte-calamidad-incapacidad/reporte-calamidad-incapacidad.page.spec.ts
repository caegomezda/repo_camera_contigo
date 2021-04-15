import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReporteCalamidadIncapacidadPage } from './reporte-calamidad-incapacidad.page';

describe('ReporteCalamidadIncapacidadPage', () => {
  let component: ReporteCalamidadIncapacidadPage;
  let fixture: ComponentFixture<ReporteCalamidadIncapacidadPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteCalamidadIncapacidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteCalamidadIncapacidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

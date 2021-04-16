import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NivelEndeudamientoPage } from './nivel-endeudamiento.page';

describe('NivelEndeudamientoPage', () => {
  let component: NivelEndeudamientoPage;
  let fixture: ComponentFixture<NivelEndeudamientoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelEndeudamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NivelEndeudamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

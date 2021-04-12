import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponenteAuxilioConvencionalPage } from './componente-auxilio-convencional.page';

describe('ComponenteAuxilioConvencionalPage', () => {
  let component: ComponenteAuxilioConvencionalPage;
  let fixture: ComponentFixture<ComponenteAuxilioConvencionalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteAuxilioConvencionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteAuxilioConvencionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

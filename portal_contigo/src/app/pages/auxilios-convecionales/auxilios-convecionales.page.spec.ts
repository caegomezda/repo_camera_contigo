import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuxiliosConvecionalesPage } from './auxilios-convecionales.page';

describe('AuxiliosConvecionalesPage', () => {
  let component: AuxiliosConvecionalesPage;
  let fixture: ComponentFixture<AuxiliosConvecionalesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliosConvecionalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuxiliosConvecionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

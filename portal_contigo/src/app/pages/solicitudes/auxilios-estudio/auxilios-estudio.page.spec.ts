import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuxiliosEstudioPage } from './auxilios-estudio.page';

describe('AuxiliosEstudioPage', () => {
  let component: AuxiliosEstudioPage;
  let fixture: ComponentFixture<AuxiliosEstudioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliosEstudioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuxiliosEstudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

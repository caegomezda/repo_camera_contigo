import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CesantiasInteresesPage } from './cesantias-intereses.page';

describe('CesantiasInteresesPage', () => {
  let component: CesantiasInteresesPage;
  let fixture: ComponentFixture<CesantiasInteresesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CesantiasInteresesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CesantiasInteresesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

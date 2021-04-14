import { TestBed } from '@angular/core/testing';

import { GestionadoService } from './gestionado.service';

describe('GestionadoService', () => {
  let service: GestionadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TemporalMovilStoreService } from './temporal-movil-store.service';

describe('TemporalMovilStoreService', () => {
  let service: TemporalMovilStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporalMovilStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

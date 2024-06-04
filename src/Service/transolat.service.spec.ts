import { TestBed } from '@angular/core/testing';

import { TransolatService } from './transolat.service';

describe('TransolatService', () => {
  let service: TransolatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransolatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

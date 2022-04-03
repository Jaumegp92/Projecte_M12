import { TestBed } from '@angular/core/testing';

import { EntradesService } from './entrades.service';

describe('EntradesService', () => {
  let service: EntradesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

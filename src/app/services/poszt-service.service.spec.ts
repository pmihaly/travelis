import { TestBed } from '@angular/core/testing';

import { PosztServiceService } from './poszt-service.service';

describe('PosztServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosztServiceService = TestBed.get(PosztServiceService);
    expect(service).toBeTruthy();
  });
});

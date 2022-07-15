import { TestBed } from '@angular/core/testing';

import { AdsserverService } from './adsserver.service';

describe('AdsserverService', () => {
  let service: AdsserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

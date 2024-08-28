import { TestBed } from '@angular/core/testing';

import { ServeclassService } from './serveclass.service';

describe('ServeclassService', () => {
  let service: ServeclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

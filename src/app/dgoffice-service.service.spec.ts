import { TestBed } from '@angular/core/testing';

import { DgofficeServiceService } from './dgoffice-service.service';

describe('DgofficeServiceService', () => {
  let service: DgofficeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgofficeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

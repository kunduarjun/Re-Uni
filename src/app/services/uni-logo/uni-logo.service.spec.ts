import { TestBed } from '@angular/core/testing';

import { UniLogoService } from './uni-logo.service';

describe('UniLogoService', () => {
  let service: UniLogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniLogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

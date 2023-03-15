import { TestBed } from '@angular/core/testing';

import { CarGenService } from './car-gen.service';

describe('CarGenService', () => {
  let service: CarGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

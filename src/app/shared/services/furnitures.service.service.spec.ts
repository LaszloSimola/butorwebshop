import { TestBed } from '@angular/core/testing';

import { FurnituresServiceService } from './furnitures.service.service';

describe('FurnituresServiceService', () => {
  let service: FurnituresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurnituresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

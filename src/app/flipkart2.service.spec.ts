import { TestBed } from '@angular/core/testing';

import { Flipkart2Service } from './flipkart2.service';

describe('Flipkart2Service', () => {
  let service: Flipkart2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flipkart2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

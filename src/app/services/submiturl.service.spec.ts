import { TestBed } from '@angular/core/testing';
import { SubmiturlService } from './submiturl.service';

describe('SubmiturlService', () => {
  let service: SubmiturlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmiturlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

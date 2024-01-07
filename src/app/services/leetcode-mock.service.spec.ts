import { TestBed } from '@angular/core/testing';
import { LeetCodeMockService } from './leetcode-mock.service';

describe('LeetCodeMockService', () => {
  let service: LeetCodeMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeetCodeMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

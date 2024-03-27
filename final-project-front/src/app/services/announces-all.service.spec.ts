import { TestBed } from '@angular/core/testing';

import { AnnouncesAllService } from './announces-all.service';

describe('AnnouncesAllService', () => {
  let service: AnnouncesAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncesAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MyAnnounceService } from './my-announce.service';

describe('MyAnnounceService', () => {
  let service: MyAnnounceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAnnounceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

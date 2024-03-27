import { TestBed } from '@angular/core/testing';

import { CheckAnnouncesService } from './check-announces.service';

describe('CheckAnnouncesService', () => {
  let service: CheckAnnouncesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAnnouncesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AllAnnouncesService } from './all-announces.service';

describe('AllAnnouncesService', () => {
  let service: AllAnnouncesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllAnnouncesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

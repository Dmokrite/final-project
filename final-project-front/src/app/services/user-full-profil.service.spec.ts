import { TestBed } from '@angular/core/testing';

import { UserFullProfilService } from './user-full-profil.service';

describe('UserFullProfilService', () => {
  let service: UserFullProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFullProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

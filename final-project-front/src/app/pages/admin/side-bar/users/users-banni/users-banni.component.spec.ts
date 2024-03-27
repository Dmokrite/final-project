import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBanniComponent } from './users-banni.component';

describe('UsersBanniComponent', () => {
  let component: UsersBanniComponent;
  let fixture: ComponentFixture<UsersBanniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersBanniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersBanniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

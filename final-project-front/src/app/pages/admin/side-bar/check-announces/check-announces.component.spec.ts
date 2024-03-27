import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAnnouncesComponent } from './check-announces.component';

describe('CheckAnnouncesComponent', () => {
  let component: CheckAnnouncesComponent;
  let fixture: ComponentFixture<CheckAnnouncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckAnnouncesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckAnnouncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

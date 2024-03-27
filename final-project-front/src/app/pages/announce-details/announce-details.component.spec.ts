import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceDetailsComponent } from './announce-details.component';

describe('AnnounceDetailsComponent', () => {
  let component: AnnounceDetailsComponent;
  let fixture: ComponentFixture<AnnounceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnounceDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnounceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

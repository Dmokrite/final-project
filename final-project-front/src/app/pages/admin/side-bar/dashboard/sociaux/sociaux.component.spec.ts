import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociauxComponent } from './sociaux.component';

describe('SociauxComponent', () => {
  let component: SociauxComponent;
  let fixture: ComponentFixture<SociauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SociauxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SociauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

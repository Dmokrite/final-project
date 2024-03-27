import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratiquesComponent } from './pratiques.component';

describe('PratiquesComponent', () => {
  let component: PratiquesComponent;
  let fixture: ComponentFixture<PratiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PratiquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PratiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenaireComponent } from './contenaire.component';

describe('ContenaireComponent', () => {
  let component: ContenaireComponent;
  let fixture: ComponentFixture<ContenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

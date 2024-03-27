import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncesAllComponent } from './announces-all.component';

describe('AnnouncesAllComponent', () => {
  let component: AnnouncesAllComponent;
  let fixture: ComponentFixture<AnnouncesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncesAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnouncesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

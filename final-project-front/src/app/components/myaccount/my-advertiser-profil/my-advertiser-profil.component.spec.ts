import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdvertiserProfilComponent } from './my-advertiser-profil.component';

describe('MyAdvertiserProfilComponent', () => {
  let component: MyAdvertiserProfilComponent;
  let fixture: ComponentFixture<MyAdvertiserProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAdvertiserProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyAdvertiserProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

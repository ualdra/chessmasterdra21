import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomainComponent } from './ecomain.component';

describe('EcomainComponent', () => {
  let component: EcomainComponent;
  let fixture: ComponentFixture<EcomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

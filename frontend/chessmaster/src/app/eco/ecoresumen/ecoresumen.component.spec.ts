import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoresumenComponent } from './ecoresumen.component';

describe('EcoresumenComponent', () => {
  let component: EcoresumenComponent;
  let fixture: ComponentFixture<EcoresumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoresumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoresumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

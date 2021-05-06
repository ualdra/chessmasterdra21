import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top100mainComponent } from './top100main.component';

describe('Top100mainComponent', () => {
  let component: Top100mainComponent;
  let fixture: ComponentFixture<Top100mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top100mainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top100mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eco100searchComponent } from './eco100search.component';

describe('Eco100searchComponent', () => {
  let component: Eco100searchComponent;
  let fixture: ComponentFixture<Eco100searchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eco100searchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eco100searchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

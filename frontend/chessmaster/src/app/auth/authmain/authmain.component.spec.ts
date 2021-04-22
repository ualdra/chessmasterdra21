import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmainComponent } from './authmain.component';

describe('AuthmainComponent', () => {
  let component: AuthmainComponent;
  let fixture: ComponentFixture<AuthmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

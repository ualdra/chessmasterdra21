import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChesspositionwhiteComponent } from './chesspositionwhite.component';

describe('ChesspositionwhiteComponent', () => {
  let component: ChesspositionwhiteComponent;
  let fixture: ComponentFixture<ChesspositionwhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChesspositionwhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChesspositionwhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

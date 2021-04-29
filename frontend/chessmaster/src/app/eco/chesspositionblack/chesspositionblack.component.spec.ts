import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChesspositionblackComponent } from './chesspositionblack.component';

describe('ChesspositionblackComponent', () => {
  let component: ChesspositionblackComponent;
  let fixture: ComponentFixture<ChesspositionblackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChesspositionblackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChesspositionblackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { ChesspositionblackComponent } from '../chesspositionblack/chesspositionblack.component';
import { ChesspositionwhiteComponent } from '../chesspositionwhite/chesspositionwhite.component';

@Component({ 
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {
  
  columnas=[1,2,3,4];


  constructor() { }

  ngOnInit(): void {
  }
  
}

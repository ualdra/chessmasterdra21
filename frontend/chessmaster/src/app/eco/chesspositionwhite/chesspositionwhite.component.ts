import { Component, OnInit, Input, OnChanges } from '@angular/core';



@Component({
  selector: 'app-chesspositionwhite',
  templateUrl: './chesspositionwhite.component.html',
  styleUrls: ['./chesspositionwhite.component.css']
})
export class ChesspositionwhiteComponent implements OnInit {
  
  @Input() piece: string;
  @Input() position_i;
  @Input() position_j;

  constructor() { }

  ngOnInit(): void {
  }

  clickCasilla():void{
    console.log(this.position_i+","+this.position_j);
  }

}

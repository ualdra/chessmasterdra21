import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-chesspositionblack',
  templateUrl: './chesspositionblack.component.html',
  styleUrls: ['./chesspositionblack.component.css']
})
export class ChesspositionblackComponent implements OnInit {

  @Input() piece: string;
  @Input() position_i;
  @Input() position_j;

  constructor() { }


  ngOnInit(): void {
    if(this.piece == "Kw"){
      
    }
  }
  ngOnChanges(): void {
    if(this.piece == "Kb"){
      console.log("KB");
    }
  }

  clickCasilla():void{
    console.log(this.position_i+","+this.position_j);
  }
}

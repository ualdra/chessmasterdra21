import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcomainComponent } from './ecomain/ecomain.component';

import { EcoRoutingModule  } from './eco-routing.module';
import { RouterModule } from '@angular/router';
import { Eco100searchComponent } from './eco100search/eco100search.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { EcoresumenComponent } from './ecoresumen/ecoresumen.component';
import { ChesspositionblackComponent } from './chesspositionblack/chesspositionblack.component';
import { ChesspositionwhiteComponent } from './chesspositionwhite/chesspositionwhite.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EcomainComponent, Eco100searchComponent, ChessBoardComponent, EcoresumenComponent, ChesspositionblackComponent, ChesspositionwhiteComponent],
  imports: [
    CommonModule,
    RouterModule,
    EcoRoutingModule,
    FormsModule
  ]
})
export class EcoModule { }

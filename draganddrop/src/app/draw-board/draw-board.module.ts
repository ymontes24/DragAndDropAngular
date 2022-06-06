import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawBoardComponent } from './components/draw-board.component';
import { DrawBoardRoutingModule } from './draw-board-routing.module';

@NgModule({
    declarations:[
        DrawBoardComponent             
    ],
    imports:[
        CommonModule,
        DrawBoardRoutingModule
    ]
})

export class DrawBoardModule {
}
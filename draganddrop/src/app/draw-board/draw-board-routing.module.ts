import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawBoardComponent } from './components/draw-board.component';

const routes: Routes=[
    {
        path:'',
        component: DrawBoardComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule
    ]
})

export class DrawBoardRoutingModule{}
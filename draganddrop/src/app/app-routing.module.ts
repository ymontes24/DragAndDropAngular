import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { LayaoutComponent } from './layaout/layaout.component';

const routes: Routes = [
  {
    path:'',
    component: LayaoutComponent,
    children:[
      {
        path:'drawboard',
        loadChildren: ()=> import ('./draw-board/draw-board.module').then(m=> m.DrawBoardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MazeComponent } from './maze/maze.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [MazeComponent],
    imports: [ 
        CommonModule, 
        FormsModule,
        RouterModule.forChild([
            {path: '', component: MazeComponent}
        ])
     ],
    exports: [],
    providers: [],
})
export class GamesModule {}
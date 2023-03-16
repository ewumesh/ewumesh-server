import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectDetectionComponent } from './object-detection.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ObjectDetectionComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([{path:'', component: ObjectDetectionComponent}])
     ],
    exports: [],
    providers: [],
})
export class ObjectDetectionModule {}
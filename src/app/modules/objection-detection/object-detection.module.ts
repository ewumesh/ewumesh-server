import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectDetectionComponent } from './object-detection.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient){
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }

@NgModule({
    declarations: [ObjectDetectionComponent],
    imports: [ 
        CommonModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
          }),
          HttpClientModule,
        RouterModule.forChild([{path:'', component: ObjectDetectionComponent}])
     ],
    exports: [],
    providers: [],
})
export class ObjectDetectionModule {}
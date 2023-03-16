import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BlogsService } from 'src/app/services/blogs/blogs.service';
import { BlogsDetails } from './details/blog-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient){
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }

@NgModule({
    declarations: [BlogsComponent, BlogsDetails],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: '', component:BlogsComponent},
            {path: 'details', component: BlogsDetails}
        ]),
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
          }),
          HttpClientModule,
          FormsModule,
          ReactiveFormsModule
     ],
    exports: [BlogsComponent],
    providers: [BlogsService],
})
export class BlogsModule {}
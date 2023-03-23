import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/** Custom Files */
import { ProyectsComponent } from 'src/app/modules/home/proyects/proyects.component';
import { JobsComponent } from 'src/app/modules/home/jobs/jobs.component';
import { MoreProyectsComponent } from 'src/app/modules/home/more-proyects/more-proyects.component';
import { AboutComponent } from 'src/app/modules/home/about/about.component';
import { BannerComponent } from 'src/app/modules/home/banner/banner.component';
import { ContactComponent } from 'src/app/modules/home/contact/contact.component';
import { HomeComponent } from 'src/app/modules/home/home.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    JobsComponent,
    ProyectsComponent,
    MoreProyectsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    CarouselModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }

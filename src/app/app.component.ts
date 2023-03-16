import { Component, Inject } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from './services/language/language.service';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ewumesh';

  isClient:boolean = false;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      this.isClient = true;
      
   }
    let currentLang = localStorage.getItem('lang');
    if (currentLang) {
      this.languageService.changeLanguage(currentLang.toString());
    } else {
      this.languageService.initLanguage();
    }

    this.titleService.setTitle("Ewumesh | Frontend Developer");

    this.meta.addTags([
      { name: 'keywords', content: 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali' },
      { name: 'description', content: 'I have 5 years of experience developing systems, interfaces, bots, and technological solutions to make the web a better place. I am dedicated to writing and refactoring clean, reusable, and scalable code in Angular/Vuejs/React and sometimes in Nodejs applying good practices and development standards.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2023-03-17', scheme: 'YYYY-MM-DD' },
      { name: 'robots', content: 'index, follow' },
    ]);

    // this.meta.updateTag({ name: 'title', content: 'Ultimate guide to edit forms with Angular &amp; Firebase' });
    //     this.meta.updateTag({ name: 'description', content: 'How to use Angular 4 meta service' });
    //     this.meta.updateTag({ name: 'author', content: 'talkingdotnet' });
    //     this.meta.updateTag({ name: 'robots', content: 'INDEX, FOLLOW'}); 
    //     this.meta.updateTag({ name: 'keywords', content: 'TypeScript, Angular'}); 
    //     this.meta.updateTag({name: 'date', content: '2018-06-02', scheme: 'YYYY-MM-DD'});
    //     this.meta.updateTag({httpEquiv: 'Content-Type', content: 'text/html'}); 
    //     this.meta.updateTag({charset: 'UTF-8'}); 
    //     this.meta.updateTag({ name: 'theme-color', content:'#000000'});
    //     this.meta.updateTag({ name: 'referrer', content: 'unsafe-url'}); 

    //     // twitter tags
    //     this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    //     this.meta.updateTag({ name: 'twitter:site', content: '@alligatorio' });
    //     this.meta.updateTag({ name: 'twitter:creator', content: '@anurag' });
    //     this.meta.updateTag({ name: 'twitter:title', content: 'Front-end Web Development, Chewed Up' });
    //     this.meta.updateTag({ name: 'twitter:description', content: 'Learn frontend web development...' });
    //     this.meta.updateTag({ name: 'twitter:image', content: 'https://alligator.io/images/front-end-cover.png' });
    //     // open graph tags
    //     this.meta.updateTag({property: 'og:title', content: "My Text"}); 
    //     this.meta.updateTag({property: 'og:site_name', content: "My Text"}); 
    //     this.meta.updateTag({property: 'og:description ', content: "My Text"}); 
    //     this.meta.updateTag({property: 'og:image', content: "https://miro.medium.com/max/1200/1*o0q-T2o2vFJJVCsJTS_ujg.jpeg"}); 
    //     this.meta.updateTag({property: 'og:url', content: "My Text"}); 
    //     this.meta.updateTag({property: 'og:type', content: "website"}); 
    //     this.meta.updateTag({property: 'og:published_time', content: "2019-04-05T09:03:25.779Z"}); 
    //     this.meta.updateTag({property: 'og:url', content: "https://medium.com/@frankpaepens/ultimate-guide-to-building-a-basic-edit-form-and-grid-with-angular-firebase-bootstrap-432a84d8354b"}); 

    AOS.init();

  }
}

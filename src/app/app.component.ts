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

    // this.meta.addTags([
    //   { name: 'keywords', content: 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali' },
    //   { name: 'description', content: 'I have 5 years of experience developing systems, interfaces, bots, and technological solutions to make the web a better place. I am dedicated to writing and refactoring clean, reusable, and scalable code in Angular/Vuejs/React and sometimes in Nodejs applying good practices and development standards.' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { name: 'date', content: '2023-03-17', scheme: 'YYYY-MM-DD' },
    //   { name: 'robots', content: 'index, follow' },
    // ]);
    this.setMetaTag();
    AOS.init();

  }

  private setMetaTag() {
    this.titleService.setTitle("Ewumesh | Frontend Developer");
    this.meta.addTags([
      {
        property: 'og:title',
        content: "Ewumesh | Frontend Developer",
      },
      {
        property: 'og:url',
        content: `${window.location.href}`,
      },

      {
        property: 'og:description',
        content: `${'I have 5 years of experience developing systems, interfaces, bots, and technological solutions to make the web a better place. I am dedicated to writing and refactoring clean, reusable, and scalable code in Angular/Vuejs/React and sometimes in Nodejs applying good practices and development standards.'+ 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali'}`,
      },
      {
        property: 'og:type',
        content: `article`,
      },
      {
        property: 'og:site_name',
        content: `Ewumesh`,
      },
      {
        property: 'og:image',
        content: 'https://ewumesh.com/assets/images/profile.JPG',
      },

      {
        property: 'twitter:card',
        content: `summary_large_image`,
      },

      {
        property: 'twitter:site',
        content: `@ewumesh`,
      },
      {
        property: 'twitter:title',
        content: `${'Ewumesh | Frontend Developer'}`,
      },
      {
        property: 'twitter:description',
        content: `${'I have 5 years of experience developing systems, interfaces, bots, and technological solutions to make the web a better place. I am dedicated to writing and refactoring clean, reusable, and scalable code in Angular/Vuejs/React and sometimes in Nodejs applying good practices and development standards.'+ 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali'}`,
      },
      {
        property: 'twitter:image',
        content: 'https://ewumesh.com/assets/images/profile.JPG',
      },
      {
        property: 'twitter:url',
        content: `${window.location.href}`,
      },
      {
        name: 'twitter:name:alt',
        content: `${window.location.href}`,
      },
    ]);
  }


}

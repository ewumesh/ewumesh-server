import { Component, Inject } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

/* Import the custom Service */
import { LanguageService } from 'src/app/services/language/language.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ewumesh';

  constructor(
    /* Inject the Title set title for the page */
    private titleService: Title,
    /* Inject the Meta set/update meta details for the page */
    private meta: Meta,
    /* Inject the custom service for initialization of language */
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    /* 
    Retrieve the selected language if selected otherwise select the default language
    */
    let currentLang = localStorage.getItem('lang');
    if (currentLang) {
      this.languageService.changeLanguage(currentLang.toString());
    } else {
      this.languageService.initLanguage();
    }
    /* Call the function for set meta details*/
    // this.setMetaTag();

    /* Initialize the AOS */
    AOS.init();

  }

  /* Set the meta details for the page*/
  private setMetaTags() {
    this.titleService.setTitle("Discover and Explore Yourself with Ewumesh");
    this.meta.addTag({ name: 'description', content: 'Ewumesh is a digital platform where you can showcase your personal brand, share your thoughts and ideas, and connect with others.' });
    this.meta.addTag({name: 'keywords', content: 'ewumesh, personal brand, online presence, social network'});
    this.meta.addTag({ name: 'author', content: 'Umesh Thapa' });
    this.meta.addTags([
      {
        property: 'og:title',
        content: "Discover and Explore Yourself with Ewumesh",
      },
      {
        property: 'og:url',
        content: `${'https://ewumesh.com'}`,
      },
      {
        property: 'og:description',
        content: `${'Ewumesh is a digital platform where you can showcase your personal brand, share your thoughts and ideas, and connect with others.'}`,
      },
      {
        property: 'og:type',
        content: `website`,
      },
      {
        property: 'og:site_name',
        content: `Ewumesh`,
      },
      {
        property: 'og:image',
        content: 'https://ewumesh.com/assets/images/banner.webp',
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
        content: `${'Discover and Explore Yourself with Ewumesh'}`,
      },
      {
        property: 'twitter:description',
        content: `${'Ewumesh is a digital platform where you can showcase your personal brand, share your thoughts and ideas, and connect with others.'}`,
      },
      {
        property: 'twitter:image',
        content: 'https://ewumesh.com/assets/images/banner.webp',
      },
      {
        property: 'twitter:url',
        content: `${'https://ewumesh.com'}`,
      },
      {
        name: 'twitter:name:alt',
        content: `${'Discover and Explore Yourself! - Ewumesh'}`,
      },
    ]);
  }
}

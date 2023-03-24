import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private analyticsService: AnalyticsService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void { 
    /** Send the analytics details */
    this.analyticsService.sendAnalyticPageView("/home", "Home");

     /** Set Meta details */
    this.setMetaTags();
  }

  /** Set Meta details */
  // private setMetaTags() {
  //   this.titleService.setTitle("Ewumesh | Frontend Developer | UI/UX Designer");
  //   this.metaService.addTag({ name: 'description', content: 'Five years of experience developing systems, interfaces, bots, and technological solutions to make the web a better place. I am dedicated to writing and refactoring clean, reusable, and scalable code in Angular/Vuejs/React and sometimes in Nodejs applying good practices and development standards.' });
  //   this.metaService.addTag({name: 'keywords', content: 'ewumesh, umesh, umes, thapa, Ewumesh, Umesh Thapa, portfolio, developer, frontend, UI, Ux, Designer, Nepal, Kathmandu, home, projects'})
  //   this.metaService.addTags([
  //     {
  //       property: 'og:title',
  //       content: "Ewumesh | Frontend Developer | UI/UX Designer",
  //     },
  //     {
  //       property: 'og:url',
  //       content: `${window.location.href}`,
  //     },

  //     {
  //       property: 'og:description',
  //       content: `${'Five years of experience developing systems, interfaces, bots, and technological solutions to make the web a better place. I am dedicated to writing and refactoring clean, reusable, and scalable code in Angular/Vuejs/React and sometimes in Nodejs applying good practices and development standards.'+ 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali'}`,
  //     },
  //     {
  //       property: 'og:type',
  //       content: `article`,
  //     },
  //     {
  //       property: 'og:site_name',
  //       content: `Ewumesh`,
  //     },
  //     {
  //       property: 'og:image',
  //       content: 'https://ewumesh.com/assets/images/profile.webp',
  //     },

  //     {
  //       property: 'twitter:card',
  //       content: `summary_large_image`,
  //     },

  //     {
  //       property: 'twitter:site',
  //       content: `@ewumesh`,
  //     },
  //     {
  //       property: 'twitter:title',
  //       content: `${'Ewumesh | Frontend Developer | UI/UX Designer'}`,
  //     },
  //     {
  //       property: 'twitter:description',
  //       content: `${'Five years of experience developing systems, interfaces, bots, and technological solutions to make the web a better place. I am dedicated to writing and refactoring clean, reusable, and scalable code in Angular/Vuejs/React and sometimes in Nodejs applying good practices and development standards.'+ 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali'}`,
  //     },
  //     {
  //       property: 'twitter:image',
  //       content: 'https://ewumesh.com/assets/images/profile.webp',
  //     },
  //     {
  //       property: 'twitter:url',
  //       content: `${window.location.href}`,
  //     },
  //     {
  //       name: 'twitter:name:alt',
  //       content: `${window.location.href}`,
  //     },
  //   ]);
  // }

  private setMetaTags() {
    this.titleService.setTitle("Discover and Explore Yourself with Ewumesh");
    this.metaService.addTag({ name: 'description', content: 'Ewumesh is a digital platform where you can showcase your personal brand, share your thoughts and ideas, and connect with others.' });
    this.metaService.addTag({name: 'keywords', content: 'ewumesh, personal brand, online presence, social network'});
    this.metaService.addTag({ name: 'author', content: 'Umesh Thapa' });
    this.metaService.addTags([
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

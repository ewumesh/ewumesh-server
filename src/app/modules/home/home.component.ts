import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
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
  ) {
  }

  ngOnInit(): void { 
    this.analyticsService.sendAnalyticPageView("/home", "Home");
    this.setMetaTag();
  }

  private setMetaTag() {
    this.titleService.setTitle("Ewumesh | Frontend Developer | UI/UX Designer");
    this.metaService.addTags([
      {
        property: 'og:title',
        content: "Ewumesh | Frontend Developer | UI/UX Designer",
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
        content: 'https://ewumesh.com/assets/images/profile.webp',
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
        content: `${'Ewumesh | Frontend Developer | UI/UX Designer'}`,
      },
      {
        property: 'twitter:description',
        content: `${'I have 5 years of experience developing systems, interfaces, bots, and technological solutions to make the web a better place. I am dedicated to writing and refactoring clean, reusable, and scalable code in Angular/Vuejs/React and sometimes in Nodejs applying good practices and development standards.'+ 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali'}`,
      },
      {
        property: 'twitter:image',
        content: 'https://ewumesh.com/assets/images/profile.webp',
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

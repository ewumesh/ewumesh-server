import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { trigger, query, stagger, animate, style, transition } from '@angular/animations'
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations:[
    trigger("animateFooter", [
      transition(":enter", [
        query("*", [
          style({opacity: 0, transform: "translateY(100%)"}),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({opacity:1, transform: "none"})
            )
          ])
        ])
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {

  languages =  [
    {name: 'English', value: 'en', image:'https://www.worldometers.info/img/flags/us-flag.gif'},
    {name: 'Japanese', value: 'jp', image:'https://www.worldometers.info/img/flags/small/tn_ja-flag.gif'},
    {name: 'Spanish', value: 'es', image:'https://www.worldometers.info/img/flags/us-flag.gif'},
    {name: 'Russian', value: 'ru', image:'https://www.worldometers.info/img/flags/small/tn_rs-flag.gif'},
    {name: 'Chinese', value: 'ch', image:'https://www.worldometers.info/img/flags/small/tn_ch-flag.gif'},
    {name: 'Arabic', value: 'ar', image:'https://www.worldometers.info/img/flags/small/tn_sa-flag.gif'},
    {name: 'French', value: 'fr', image:'https://www.worldometers.info/img/flags/small/tn_fr-flag.gif'},
    {name: 'Korean', value: 'kr', image:'https://www.worldometers.info/img/flags/small/tn_ks-flag.gif'},
    {name: 'Thai', value: 'kr', image:'https://www.worldometers.info/img/flags/small/tn_th-flag.gif'}
  ]

  cvName;
  responsiveMenuVisible: Boolean = false;

  constructor(
    public analyticsService: AnalyticsService,
    private languageServie: LanguageService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
  }

  scroll(el) {
    // if (typeof document !== "undefined") {
    if(document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({behavior: 'smooth'});
    } else{
      this.router.navigate(['/home']).then(()=> document.getElementById(el).scrollIntoView({behavior: 'smooth'}) );
    }
    this.responsiveMenuVisible=false;
  // }
  }

  changeLanguage(value) {
    this.analyticsService.sendAnalyticEvent('language_change', 'footer', 'click');
    this.languageServie.changeLanguage(value);
  }

  downloadCV() {
    this.analyticsService.sendAnalyticEvent("click_downloadcv", "menu", "click")
    this.languageServie.translateService.get("Header.cvName").subscribe(val => {
      this.cvName = val
      console.log(val)
      // app url
      let url = window.location.href;

      // Open a new window with the CV
      window.open(url + "/../assets/cv/" + this.cvName, "_blank");
    })
  }

}

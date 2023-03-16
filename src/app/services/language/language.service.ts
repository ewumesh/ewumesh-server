import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: "es" | "en" | "jp" | "ch" | "ar";

  constructor(
    public translateService: TranslateService,
    private location: Location,
  ) {
    let currentLang = localStorage.getItem('lang');
    if(currentLang) {
      this.changeLanguage(currentLang.toString());
    }
  }

  initLanguage(){
    this.translateService.addLangs(["en", "es", "jp", "ch", "ar"])
    let language = navigator.language || (navigator as any).userLanguage;
    // language = language.split("-").includes("es") ? "es" : "en"

    if(language.split("-").includes("es")) {
      language = 'es';
    } else if(language.split("-").includes("jp")) {
      language = 'jp';
    } else if(language.split("-").includes("en")) {
      language = 'en';
    } else if(language.split("-").includes("ch")) {
      language = 'ch';
    } else if(language.split("-").includes("ar")) {
      language = 'ar';
    }
    // console.log(language, "LANG")
    this.translateService.setDefaultLang(language)

    // Change the URL without navigate:
    // this.location.go(language)

    this.language=language
  }

  changeLanguage(language){
    localStorage.setItem('lang', language);
    this.translateService.setDefaultLang(language);
    // this.location.go(language)
    this.language=language
  }
}

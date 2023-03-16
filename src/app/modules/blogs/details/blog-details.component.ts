import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs/blogs.service';
// import Speech from 'speak-tts';
@Component({
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.scss']
})
export class BlogsDetails implements OnInit {
  blogDetails: any = {};

  html = '';
  result = '';
  speech: any;
  speechData: any;

  play:boolean = false;
  playing: boolean = false;
  latestBLogs:any[] = [];

  constructor(
    private blogsService: BlogsService,
    private titleService: Title,
    private metaService: Meta,
    private http: HttpClient,
    private route: ActivatedRoute,

  ) {
    this.getBlogs();
    this.getBlog();
    // this.setMetaTag();
    // this.initSpeech();
    // let blog = JSON.parse(localStorage.getItem('currentBlog'));
    // this.blogDetails = blog;
    this.titleService.setTitle("Ewumesh | " + this.blogDetails.title);

    this.metaService.addTags([
      { name: 'keywords', content: 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali, blogs, medium, coding, javascript, productivity, games, game, online game, live' },
      { name: 'description', content: this.blogDetails.description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2023-03-17', scheme: 'YYYY-MM-DD' },
      { name: 'robots', content: 'index, follow' },
    ]);
    
  }

  ngOnInit() {
    // let blog = JSON.parse(localStorage.getItem('currentBlog'));
    // this.blogDetails = blog;

    // this.titleService.setTitle("Ewumesh | " + this.blogDetails.title);

    // this.metaService.addTags([
    //   { name: 'keywords', content: 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali, blogs, medium, coding, javascript, productivity, games, game, online game, live' },
    //   { name: 'description', content: this.removeHTMLTags(this.blogDetails.description) },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { name: 'date', content: '2023-03-17', scheme: 'YYYY-MM-DD' },
    //   { name: 'robots', content: 'index, follow' },
    // ]);

    //  this.metaService.addTags([
    //    {name: 'keywords', content: 'Ewumesh' + '|'+ this.blogDetails.title},
    //    {name: 'description', content: this.removeHTMLTags(this.blogDetails.description)}
    //  ]);

    // let metaTags = [
    //   { name: 'description', content: 'Ewumesh' + '|' + this.blogDetails.title + '...' },
    //   { property: 'og:title', content: "Ewumesh | " + this.blogDetails.title },
    //   { proprety: 'og:description', content: this.removeHTMLTags(this.blogDetails.description) },
    //   { property: 'og:image', content: 'src/assets/images/banner.png' },
    //   // { property: 'og:url', content: '' },
    //   { name: "twitter:card", content: "summary_large_image" },
    // ]

    // metaTags.forEach(m => this.metaService.updateTag(m));
    // this.setMetaTag();

    // setTimeout(() => {
    //   this.speechAudio();
    // }, 3000);
  }

  getBlogs() {
    let url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ewumesh';
          this.http.get(url).subscribe(
            response => {
              // Handle the response from the API
              // console.log(response);
              this.latestBLogs = response['items'];
            },
            error => {
              // Handle any errors that occurred during the request
              console.error(error);
            })
  }

  getBlog() {
    let id = this.route.snapshot.paramMap.get('id');

    let blog = this.latestBLogs.find(a => a.guid === id);
    this.blogDetails = blog;
  }

  removeHTMLTags(c) {
    let content = c.replace(/<[^>]*>/g, '');
    return content.slice(0, 150);
  }

  // initSpeech() {
  //   this.speech = new Speech();

  //   if (this.speech.hasBrowserSupport()) {
  //     this.speech.init({
  //       'volume': 1,
  //       'lang': 'en-GB',
  //       'rate': 1,
  //       'pitch': 1,
  //       'voice': 'Google UK English Male',
  //       'splitSentences': true,
  //       'listeners': {
  //         'onvoiceschanged': (voices) => {
  //           console.log("Event voiceschanged", voices)
  //         }
  //       }
  //     }).then((data) => {
  //       console.log("Speech is ready, voices are available", data)
  //       this.speechData = data;
  //       data.voices.forEach(voice => {
  //         console.log(voice.name + " " + voice.lang)
  //       });
  //     }).catch(e => {
  //       console.error("An error occured while initializing : ", e)
  //     })
  //   }
  // }

  // speechAudio() {
  //   this.play = !this.play;
  //   if(this.play) {
  //     this.speech.pause()
  //   } {
  //     this.speech.resume();
  //   }

  // }

  // playAudio() {
  //   this.playing = true;
  //   this.speech.speak({
  //     text: this.blogDetails.content,
  //   })
  // }

    private setMetaTag() {
      // this.metaService.addTags([
      //   { name: 'description', content: 'This is a test' },
      //   { name: 'author', content: 'Mr Bobo' },
      //   { name: 'keywords', content: 'Angular, Meta Service' },
      //   { name: 'twitter:card', content: 'summary_large_image' },
      //     { name: 'twitter:title', content: 'MERO BLOG TITLE'},
      //     { name: 'twitter:description', content: 'MERO BLOG DESCRIPTION'},
      //     { name: 'twitter:image', content: 'https://ewumesh.com/assets/images/cme.png'},
      //     { name: 'twitter:image:alt', content: 'Blog Title'},
      //     { property: 'og:title', content: 'Mero Blog Title'},
      //     { property: 'og:description', content: 'Mero Blog Description'},
      //     { property: 'og:url', content: 'https://ewumesh.com/blogs/details'},
      //     { property: 'og:image', content:'https://ewumesh.com/assets/images/cme.png'},
      //     { property: 'og:image:alt', content: 'Mro00000.0 .0 .00 .0.0..0.0.00'},
      // ]);
    this.metaService.addTags([
      {
        property: 'og:title',
        content: this.blogDetails.title,
      },
      {
        property: 'og:url',
        content: `${window.location.href}`,
      },

      {
        property: 'og:description',
        content: `${this.blogDetails.description}`,
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
        content: `https://ewumesh.com/assets/images/cme.png`,
      },

      {
        property: 'twitter:card',
        content: `summary_large_image_mmm`, 
      },

      {
        property: 'twitter:site',
        content: `@Ewumesh`,
      },
      {
        property: 'twitter:title',
        content: `$${this.blogDetails.title}`,
      },
      {
        property: 'twitter:description',
        content: `$${this.blogDetails.description}`,
      },
      {
        property: 'twitter:image',
        content: `https://ewumesh.com/assets/images/cme.png`,
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

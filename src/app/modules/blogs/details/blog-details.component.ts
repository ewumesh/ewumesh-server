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

  play: boolean = false;
  playing: boolean = false;
  latestBLogs: any[] = [];

  constructor(
    private blogsService: BlogsService,
    private titleService: Title,
    private metaService: Meta,
    private http: HttpClient,
    private route: ActivatedRoute,

  ) {
    let blog = JSON.parse(localStorage.getItem('currentBlog'));
    this.blogDetails = blog;
    this.setMetaTag();

    this.getBlogs();
  }

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams.id, 'AOS')

    

    // this.setMetaTag();
    // this.initSpeech();

    if (this.latestBLogs.length > 0) {
      // this.titleService.setTitle("Ewumesh | " + this.blogDetails.title);
      

      // this.metaService.addTags([
      //   { name: 'keywords', content: 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali, blogs, medium, coding, javascript, productivity, games, game, online game, live' },
      //   { name: 'description', content: this.removeHTMLTags(this.blogDetails.description) },
      //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //   { name: 'date', content: '2023-03-17', scheme: 'YYYY-MM-DD' },
      //   { name: 'robots', content: 'index, follow' },
      // ]);
    }
  }

  getBlogs() {
    let url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ewumesh';
    this.http.get(url).subscribe(
      response => {
        // Handle the response from the API
        // console.log(response);
        this.latestBLogs = response['items'];
        this.getBlog();
      },
      error => {
        // Handle any errors that occurred during the request
        console.error(error);
      })
  }

  getBlog() {
    let id = this.route.snapshot.queryParams.id;
    let blog = this.latestBLogs.find(a => a.guid === id);
    this.blogDetails = blog;
    this.setMetaTag();
  }

  removeHTMLTags(c) {
    let content = c.replace(/<[^>]*>/g, '');
    return content.slice(0, 300);
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
    this.titleService.setTitle("Ewumesh | " + this.blogDetails.title);
    this.metaService.addTags([
      {
        property: 'og:title',
        content: `${"Ewumesh | " + this.blogDetails.title}`,
      },
      {
        property: 'og:url',
        content: `${window.location.href}`,
      },

      {
        property: 'og:description',
        content: `${this.removeHTMLTags(this.blogDetails.description)}`,
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
        content: `${this.blogDetails.thumbnail}`,
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
        content: `${"Ewumesh | " + this.blogDetails.title}`,
      },
      {
        property: 'twitter:description',
        content: `${this.removeHTMLTags(this.blogDetails.description)}`,
      },
      {
        property: 'twitter:image',
        content: `${this.blogDetails.thumbnail}`,
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

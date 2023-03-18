import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { BlogsService } from 'src/app/services/blogs/blogs.service';

@Component({
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.scss']
})
export class BlogsComponent implements OnInit {
    constructor(
      private http: HttpClient,
      public analyticsService: AnalyticsService,
      private blogsService: BlogsService,
      private router: Router,
      private titleService: Title,
      private metaService: Meta
      ) { }

    latestBLogs:any[] = [];

    ngOnInit(): void {       
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

            this.setMetaTag();

            // this.titleService.setTitle("Ewumesh | Medium Blogs Collection");

            // this.metaService.addTags([
            //   { name: 'keywords', content: 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali, blogs, medium, coding, javascript, productivity' },
            //   { name: 'description', content: 'Blogging is a fun and flexible way for self-expression and social connection, so it is no wonder blogs have become very popular. In addition, people can start blogging to improve their writing skills or even promote their businesses.' },
            //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            //   { name: 'date', content: '2023-03-17', scheme: 'YYYY-MM-DD' },
            //   { name: 'robots', content: 'index, follow' },
            // ]);
    }

    removeTags(c) {
      let content = c.replace(/<[^>]*>/g, '');
      return content.slice(0,150);
    }

    gotoBlogDetails(blog) {
      this.router.navigate(['/blogs/details'],{ queryParams: {id:blog.guid}})
      this.blogsService.updateBlogs(blog);
    }

    private setMetaTag() {
      this.titleService.setTitle("Ewumesh | Medium Blogs Collection");
      this.metaService.addTags([
        {
          property: 'og:title',
          content: "Ewumesh | Medium Blogs Collection",
        },
        {
          property: 'og:url',
          content: `${window.location.href}`,
        },
  
        {
          property: 'og:description',
          content: `${'Blogging is a fun and flexible way for self-expression and social connection, so it is no wonder blogs have become very popular. In addition, people can start blogging to improve their writing skills or even promote their businesses.'+ 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali, blogs, medium, coding, javascript, productivity'}`,
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
          content: 'https://ewumesh.com/assets/images/blogs.png',
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
          content: `${'Ewumesh | Medium Blogs Collection'}`,
        },
        {
          property: 'twitter:description',
          content: `${'Blogging is a fun and flexible way for self-expression and social connection, so it is no wonder blogs have become very popular. In addition, people can start blogging to improve their writing skills or even promote their businesses.'+ 'Frontend, software, developer, Nepal, Umesh, Ewumesh, ewumesh, nepali, blogs, medium, coding, javascript, productivity'}`,
        },
        {
          property: 'twitter:image',
          content: 'https://ewumesh.com/assets/images/blogs.png',
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

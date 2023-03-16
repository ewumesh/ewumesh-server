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

            this.titleService.setTitle( "Ewumesh | Latest blogs on medium" );

            this.metaService.addTags([
              {name: 'keywords', content: 'Ewumesh' + '|'+ ''},
              {name: 'description', content: ''}
            ]);
    }

    removeTags(c) {
      let content = c.replace(/<[^>]*>/g, '');
      return content.slice(0,150);
    }

    gotoBlogDetails(blog) {
      this.router.navigate(['/blogs/details'])
      this.blogsService.updateBlogs(blog);
    }
}

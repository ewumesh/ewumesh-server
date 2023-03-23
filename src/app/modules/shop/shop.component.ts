import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.scss']
})

export class ShopComponent implements OnInit {
    loading: boolean = true;

    constructor(
        private meta: Meta,
        private titleService: Title
    ) {}


    ngOnInit() {
        setTimeout(() => {
            this.loading = false;
        }, 2000);
    }

      /* Set the meta details for the page*/
  private setMetaTag() {
    this.titleService.setTitle("Shop for Personalized and Handcrafted Products on My Personal Site -Ewumesh");
    this.meta.addTag({ name: 'description', content: 'Discover a world of unique and personalized products on my personal site shop. From custom gifts to handcrafted jewelry, find something special that speaks to you. Shop now and add a touch of individuality to your life.' });
    this.meta.addTag({name: 'keywords', content: 'ewumesh, ewumesh.com, buy, sell'})
    this.meta.addTag({ name: 'author', content: 'Umesh Thapa' });
    this.meta.addTags([
      {
        property: 'og:title',
        content: "Shop for Personalized and Handcrafted Products on My Personal Site -Ewumesh",
      },
      {
        property: 'og:url',
        content: `${'https://ewumesh.com/shop'}`,
      },

      {
        property: 'og:description',
        content: `${'Discover a world of unique and personalized products on my personal site shop. From custom gifts to handcrafted jewelry, find something special that speaks to you. Shop now and add a touch of individuality to your life.'}`,
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
        content: `${'Shop for Personalized and Handcrafted Products on My Personal Site -Ewumesh'}`,
      },
      {
        property: 'twitter:description',
        content: `${'Discover a world of unique and personalized products on my personal site shop. From custom gifts to handcrafted jewelry, find something special that speaks to you. Shop now and add a touch of individuality to your life.'}`,
      },
      {
        property: 'twitter:image',
        content: 'https://ewumesh.com/assets/images/banner.webp',
      },
      {
        property: 'twitter:url',
        content: `${'https://ewumesh.com/shop'}`,
      },
      {
        name: 'twitter:name:alt',
        content: `${'https://ewumesh.com/shop'}`,
      },
    ]);
  }

}
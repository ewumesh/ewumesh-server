import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.scss']
})

export class ShopComponent implements OnInit {
    loading: boolean = true;


    ngOnInit() {
        setTimeout(() => {
            this.loading = false;
        }, 2000);
    }

}
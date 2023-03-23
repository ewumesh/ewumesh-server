import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/** Custom Files */
import { ShopComponent } from 'src/app/modules/shop/shop.component';

@NgModule({
    declarations: [ShopComponent],
    imports: [CommonModule],
    exports: [],
    providers:[]
})

export class ShopModule {

}

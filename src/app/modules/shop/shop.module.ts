import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/** Custom Files */
import { ShopComponent } from 'src/app/modules/shop/shop.component';

@NgModule({
    declarations: [ShopComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: ShopComponent}
        ])
    ],
    exports: [ShopComponent],
    providers:[]
})

export class ShopModule {

}

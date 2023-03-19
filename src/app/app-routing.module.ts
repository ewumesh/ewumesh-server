import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blogs', loadChildren: () => import('./modules/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'games/maze', loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule) },
  { path: 'ai/object-detection', loadChildren: () => import('./modules/objection-detection/object-detection.module').then(m => m.ObjectDetectionModule) },

  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './shared/404/404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blogs', loadChildren: () => import('./modules/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'games/maze', loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule) },
  { path: 'ai/object-detection', loadChildren: () => import('./modules/objection-detection/object-detection.module').then(m => m.ObjectDetectionModule) },

  { path: '**', pathMatch: 'full', redirectTo: '/home' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

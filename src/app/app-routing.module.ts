import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**Custom files */
import { HomeComponent } from 'src/app/modules/home/home.component';
import { NotFoundComponent } from 'src/app/shared/404/404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blogs', loadChildren: () => import('src/app/modules/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'games/maze', loadChildren: () => import('src/app/modules/games/games.module').then(m => m.GamesModule) },
  { path: 'ai/object-detection', loadChildren: () => import('src/app/modules/objection-detection/object-detection.module').then(m => m.ObjectDetectionModule) },

  /** If route path is empty then it redirect to home */
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  /** If route not found then it redirect to Not found page */
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

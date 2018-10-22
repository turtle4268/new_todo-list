
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { ListsResolver } from './lists-resolver.service';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [{
      path: '',
      redirectTo: 'all',
      pathMatch: 'full'
    },
    {
      path: 'all',
      component: ListComponent,
      resolve: { lists: ListsResolver}
    },
    { path: 'progressing',
      component: ListComponent,
      resolve: { lists: ListsResolver}
    },
    { path: 'completed',
      component: ListComponent,
      resolve: { lists: ListsResolver}
    }]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ListsResolver,
  ]
})
export class AppRoutingModule {}

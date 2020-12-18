import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfRoutesComponent } from './pages/list-of-routes/list-of-routes.component';
import { ShowRouteComponent } from './pages/show-route/show-route.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { HelpComponent } from './pages/help/help.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'routes',
    component: ListOfRoutesComponent
  },
  {
    path: 'route/:id',
    component: ShowRouteComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'credits',
    component: CreditsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

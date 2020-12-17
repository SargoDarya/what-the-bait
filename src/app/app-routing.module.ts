import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfRoutesComponent } from './pages/list-of-routes/list-of-routes.component';
import { ShowRouteComponent } from './pages/show-route/show-route.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

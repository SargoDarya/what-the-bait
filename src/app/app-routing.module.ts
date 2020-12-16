import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfRoutesComponent } from './pages/list-of-routes/list-of-routes.component';
import { ShowRouteComponent } from './pages/show-route/show-route.component';
import { CreditsComponent } from './pages/credits/credits.component';

const routes: Routes = [
  {
    path: 'routes',
    component: ListOfRoutesComponent
  },
  {
    path: 'route/:id',
    component: ShowRouteComponent
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

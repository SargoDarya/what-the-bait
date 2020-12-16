import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BaitViewComponent } from './components/bait-view/bait-view.component';

import { TimeService } from './services/time.service';
import { LocationService } from './services/location.service';
import { RouteService } from './services/route.service';
import { ItemImageComponent } from './components/item-image/item-image.component';
import { ObjectiveFishComponent } from './components/objective-fish/objective-fish.component';
import { FishTypeComponent } from './components/fish-type/fish-type.component';
import { RouteViewComponent } from './components/route-view/route-view.component';
import { ListOfRoutesComponent } from './pages/list-of-routes/list-of-routes.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { ShowRouteComponent } from './pages/show-route/show-route.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    BaitViewComponent,
    ItemImageComponent,
    ObjectiveFishComponent,
    FishTypeComponent,
    RouteViewComponent,
    ListOfRoutesComponent,
    CreditsComponent,
    ShowRouteComponent,
    StatusBarComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    TimeService,
    LocationService,
    RouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

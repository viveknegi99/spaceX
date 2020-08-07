import { FilterComponent } from './filter/filter.component';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
//import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { LaunchService } from './launch.service';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'spaceX' }),
  //  FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  declarations: [
    AppComponent,

    HomeComponent,
    FilterComponent,
    CardComponent
  ],
  providers: [ LaunchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}

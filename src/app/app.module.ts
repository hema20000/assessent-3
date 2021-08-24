import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneHeaderComponent } from './one-header/one-header.component';
import { OneFooterComponent } from './one-footer/one-footer.component';
import { OneSiteLayoutComponent } from './one-site-layout/one-site-layout.component';
import { OneHomeComponent } from './one-home/one-home.component';
import { OneC1Component } from './one-c1/one-c1.component';
import { OneC2Component } from './one-c2/one-c2.component';
import { OneC3Component } from './one-c3/one-c3.component';
import { OneC4Component } from './one-c4/one-c4.component';
import { OneC5Component } from './one-c5/one-c5.component';
import { OnePageNotFoundComponent } from './one-page-not-found/one-page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    OneHeaderComponent,
    OneFooterComponent,
    OneSiteLayoutComponent,
    OneHomeComponent,
    OneC1Component,
    OneC2Component,
    OneC3Component,
    OneC4Component,
    OneC5Component,
    OnePageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [OneSiteLayoutComponent]
})
export class AppModule { }

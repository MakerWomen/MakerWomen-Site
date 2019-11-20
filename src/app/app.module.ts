import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import {RouterModule} from '@angular/router';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { AboutComponent } from './components/pages/about/about.component';
import { EventsComponent } from './components/pages/events/events.component';
import { RulesComponent } from './components/pages/rules/rules.component';
import { FaqsComponent } from './components/pages/faqs/faqs.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SocialMediaComponent,
    AboutComponent,
    EventsComponent,
    RulesComponent,
    FaqsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

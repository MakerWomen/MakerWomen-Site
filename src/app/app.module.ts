import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import {RouterModule} from '@angular/router';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { AboutComponent } from './components/pages/about/about.component';
import { EventsComponent } from './components/pages/events/events.component';
import { RulesComponent } from './components/pages/rules/rules.component';
import { FaqsComponent } from './components/pages/faqs/faqs.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';

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
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutComponent} from './components/pages/about/about.component';
import {EventsComponent} from './components/pages/events/events.component';
import {RulesComponent} from './components/pages/rules/rules.component';
import {FaqsComponent} from './components/pages/faqs/faqs.component';
import {ProfileComponent} from './components/pages/profile/profile.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'components/home', component: HomeComponent },
  { path : 'components/about', component: AboutComponent },
  { path : 'components/events', component: EventsComponent },
  { path : 'components/rules', component: RulesComponent },
  { path : 'components/faqs', component: FaqsComponent },
  { path : 'components/profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ana sayfa
  { path: 'home', component: HomeComponent }, // Ana sayfa
  { path: 'about', component: AboutComponent }, // Hakkımzda

];

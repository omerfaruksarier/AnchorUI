import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { routes } from './app.routes';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Router ayarları
    AppComponent, // Standalone bileşenler burada import edilir
    NavComponent,
    FooterComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent], // Ana bileşen
})
export class AppModule {}

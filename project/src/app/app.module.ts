import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CatsComponent } from './cats/cats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {CatsComponent} from "./cats/cats.component";
import {HttpClientModule} from "@angular/common/http";
import {CatThumbComponent} from "./cats/cat-thumb/cat-thumb.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatsComponent,
    CatThumbComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

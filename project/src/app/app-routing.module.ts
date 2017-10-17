import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {CatsComponent} from './cats/cats.component';

const routes: Routes = [
  {
    path: "",
    component: CatsComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "cats",
    component: CatsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


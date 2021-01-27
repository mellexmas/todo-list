import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ParamPageComponent } from './param-page/param-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'params', component: ParamPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

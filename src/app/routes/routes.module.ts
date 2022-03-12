import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {LoginModule} from "./login/login.module";
import {HomeModule} from "../pages/home/home.module";
import {RegisterModule} from "../pages/register/register.module";



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{
      useHash: true
    }),
    HomeModule
  ],
  exports: [RouterModule],
  entryComponents:[]
})
export class RoutesModule {
  constructor() {
  }
}

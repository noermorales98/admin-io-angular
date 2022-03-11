import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {LoginModule} from "./login/login.module";



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{
      useHash: true
    }),
    LoginModule
  ],
  exports: [RouterModule],
  entryComponents:[]
})
export class RoutesModule {
  constructor() {
  }
}

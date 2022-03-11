import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {routes} from "../../routes/routes";


@NgModule({
  declarations: [
    //el unico que va
    HomeComponent
  ],
  imports: [ //hijos
    CommonModule,
    RouterModule.forRoot(routes,({useHash:true}))
  ]
})
export class HomeModule { }

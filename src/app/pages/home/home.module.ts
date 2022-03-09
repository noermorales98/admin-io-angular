import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
// @ts-ignore
import { AboutComponent } from './info/about/about.component';
// @ts-ignore
import { ContactComponent } from './info/contact/contact.component';
// @ts-ignore
import { ServicesComponent } from './info/services/services.component';
import {AppModule} from "../../app.module";
import {HeaderModule} from "./header/header.module";


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppModule,
    HeaderModule
  ]
})
export class HomeModule { }

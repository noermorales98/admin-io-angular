import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutModule} from "./about/about.module";
import {ContactModule} from "./contact/contact.module";
import {CreateWorkgroupModule} from "./create-workgroup/create-workgroup.module";
import {InfoTaskModule} from "./info-task/info-task.module";
import {RegisterModule} from "./register/register.module";
import {ServicesModule} from "./services/services.module";
import {WorkgroupModule} from "./workgroup/workgroup.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutModule,
    ContactModule,
    CreateWorkgroupModule,
    InfoTaskModule,
    RegisterModule,
    ServicesModule,
    WorkgroupModule,
    RouterModule
  ]
})
export class PagesModule { }

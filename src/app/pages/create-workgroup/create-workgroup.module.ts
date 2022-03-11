import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateWorkgroupComponent} from "./create-workgroup.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [CreateWorkgroupComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CreateWorkgroupModule { }

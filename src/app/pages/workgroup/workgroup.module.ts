import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkgroupComponent} from "./workgroup.component";
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [WorkgroupComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class WorkgroupModule { }

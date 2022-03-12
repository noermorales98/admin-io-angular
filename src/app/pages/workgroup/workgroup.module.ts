import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkgroupComponent} from "./workgroup.component";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [WorkgroupComponent
  ],
  exports: [
    WorkgroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class WorkgroupModule { }

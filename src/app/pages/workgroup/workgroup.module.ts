import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header2Component } from './header2/header2.component';
import {MatIconModule} from "@angular/material/icon";
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header2Component } from './header2/header2.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        Header2Component
    ],
    exports: [
        Header2Component
    ],
  imports: [
    CommonModule
  ]
})
export class WorkgroupModule { }

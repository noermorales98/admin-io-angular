import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Header2Component} from "./header2.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [Header2Component],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Header2Module { }

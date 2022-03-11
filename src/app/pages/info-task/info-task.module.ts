import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoTaskComponent} from "./info-task.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [InfoTaskComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class InfoTaskModule { }

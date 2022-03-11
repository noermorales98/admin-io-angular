import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServicesComponent} from "./services.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ServicesModule { }

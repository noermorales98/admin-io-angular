import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout.component";
import {RoutesModule} from "../routes/routes.module";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RoutesModule
  ],
  exports:[]
})
export class LayoutModule { }

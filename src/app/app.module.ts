import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {PagesModule} from "./pages/pages.module";
import {RoutesModule} from "./routes/routes.module";
import {RouterModule} from "@angular/router";
import {LayoutModule} from "./layout/layout.module";
import {HomeModule} from "./pages/home/home.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PagesModule,
    RoutesModule,
    RouterModule,
    LayoutModule,
    HomeModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

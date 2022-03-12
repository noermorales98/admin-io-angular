import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {PagesModule} from "./pages/pages.module";
import {RoutesModule} from "./routes/routes.module";
import {RouterModule} from "@angular/router";
import {LayoutModule} from "./layout/layout.module";
import {AppRoutingModule} from "./app-routing.module";
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PagesModule,
    RoutesModule,
    RouterModule,
    LayoutModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

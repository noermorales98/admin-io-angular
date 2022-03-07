import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { WorkgroupComponent } from './pages/workgroup/workgroup.component';
import { CreateWorkgroupComponent } from './pages/create-workgroup/create-workgroup.component';
import { InfoTaskComponent } from './pages/info-task/info-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/home/header/header.component';
import {MatIconModule} from "@angular/material/icon";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    WorkgroupComponent,
    CreateWorkgroupComponent,
    InfoTaskComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

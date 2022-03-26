import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutModule} from "./about/about.module";
import {ContactModule} from "./contact/contact.module";
import {CreateWorkgroupModule} from "./create-workgroup/create-workgroup.module";
import {InfoTaskModule} from "./info-task/info-task.module";
import {RegisterModule} from "./register/register.module";
import {ServicesModule} from "./services/services.module";
import {WorkgroupModule} from "./workgroup/workgroup.module";
import {RouterModule} from "@angular/router";
import { CreateTaskComponent } from './create-task/create-task.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateTaskComponent
  ],
    imports: [
        CommonModule,
        AboutModule,
        ContactModule,
        CreateWorkgroupModule,
        InfoTaskModule,
        RegisterModule,
        ServicesModule,
        WorkgroupModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class PagesModule { }

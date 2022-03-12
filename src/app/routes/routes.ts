import {LayoutComponent} from "../layout/layout.component";
import {HomeComponent} from "../pages/home/home.component";
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "../pages/about/about.component";
import {ContactComponent} from "../pages/contact/contact.component";
import {CreateWorkgroupComponent} from "../pages/create-workgroup/create-workgroup.component";
import {InfoTaskComponent} from "../pages/info-task/info-task.component";
import {RegisterComponent} from "../pages/register/register.component";
import {ServicesComponent} from "../pages/services/services.component";
import {WorkgroupComponent} from "../pages/workgroup/workgroup.component";


export const routes = [

  //home
  {path: '', component: LayoutComponent, children: [
      {path:'', component: HomeComponent},
      {path:'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'services',component: ServicesComponent},
      {path: 'home',component: HomeComponent},
    ]},
  //login
  {path: 'login', component: LoginComponent},
  //login sucesfull
  {path: 'groups', component: WorkgroupComponent},
  {path: 'register', component: RegisterComponent}
];

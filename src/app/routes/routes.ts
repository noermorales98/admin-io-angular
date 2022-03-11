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
  {path: '', component: LoginComponent},
  {
    path: 'barra',
    component: LayoutComponent,
    children: [
      {path:'', component: HomeComponent},
      {path:'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'create', component: CreateWorkgroupComponent},
      {path: 'info-task', component: InfoTaskComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'services',component: ServicesComponent},
      {path: 'workgroup', component: WorkgroupComponent}
    ]
  },
  //not lazy load component
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'home'}
];

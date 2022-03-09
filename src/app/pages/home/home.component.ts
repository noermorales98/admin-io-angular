import { Component, OnInit } from '@angular/core';

const hola = () =>{
  // @ts-ignore
  this.route.navigate(['/register'])
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Admin.io';
  redirigir: Redi[]=[{
    redirectTo: '/login'
  }];


  constructor() { }

  ngOnInit(): void {
  }
}

export interface Redi{
  redirectTo: string;
}

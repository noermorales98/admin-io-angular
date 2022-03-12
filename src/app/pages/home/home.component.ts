import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Admin.io';


  constructor(private router: Router) {
    this.router.navigate([''])
  }

  ngOnInit(): void {
  }
}

export interface Redi{
  redirectTo: string;
}

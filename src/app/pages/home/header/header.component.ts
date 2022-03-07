import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}

addEventListener('DOMContentLoaded', () => {
  const btn_menu = document.querySelector('.btn_menu')
  if(btn_menu){
    btn_menu.addEventListener('click',()=>{
      const menu_items = document.querySelector('.menu_items')
      // @ts-ignore
      menu_items.classList.toggle('show')
    })
  }
} )


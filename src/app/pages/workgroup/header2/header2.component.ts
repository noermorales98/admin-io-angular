import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

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

